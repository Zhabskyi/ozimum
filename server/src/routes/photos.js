const router = require('express').Router();
const database = require('../db/database.js');
const Jimp = require('jimp');
const fs = require('fs');

require('dotenv').config();
const multer = require('multer');
const AWS = require('aws-sdk');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let s3bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// get user api/auth, private

module.exports = db => {
  router.get('/photos', async (req, res) => {
    try {
      db.query(`SELECT * FROM photos`).then(({ rows: photos }) => {
        res.json(photos);
      });
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  //Add photo
  router.post('/photos', upload.single('file'), async (req, res) => {
    let info = req.body;
    console.log(info);

    try {
      const image = req.file;

      const file = await Jimp.read(Buffer.from(image.buffer, 'base64'))
        .then(async image => {
          const background = await Jimp.read(
            'https://ozimum.s3-us-west-2.amazonaws.com/background.png'
          );

          image.resize(Jimp.AUTO, 900);
          image.composite(background, 1000, 700);
          return image.getBufferAsync(Jimp.AUTO);
        })
        .catch(err => {
          res.status(500).json({ msg: 'Server Error', error: err });
        });

      const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

      //Where you want to store your file

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: image.originalname,
        Body: file,
        ContentType: image.mimetype,
        ACL: 'public-read'
      };

      s3bucket.upload(params, async (err, data) => {
        try {
          if (err) {
            res.status(500).json({ error: true, Message: err });
          } else {
            const newFileUploaded = {
              description: req.body.description,
              fileLink: s3FileURL + image.originalname,
              s3_key: params.Key
            };
            info = { ...info, photo: newFileUploaded.fileLink };
            // Add all info to database after store picture to S3
            const photos = await database.addPhoto(db, info);
            res.send(photos);
          }
        } catch (err) {
          res.status(500).json({ msg: 'Server Error', error: err, info: info });
        }
      });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error', error: err });
    }
  });

  router.get('/photos/:title', (req, res) => {
    const key = req.params.title;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key
    };

    s3bucket.getObject(params, async (err, data) => {
      if (err) {
        res.status(404).send('Page not found!');
      } else {
        if (data.code === 'NoSuchKey') {
          res.status(404).send('Page not found!');
        } else {
          console.log('DATA', data);
          const buff = await Buffer.from(data.Body, 'base64');

          res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Disposition': `attachment; filename=${key}`,
            'Content-Length': buff.byteLength
          });

          res.write(buff, 'binary');
          res.end(null, 'binary');
        }
      }
    });
  });





  router.post('/photos/single',async  (req, res) => {
    console.log("REQ =====>>>>>>>",req);
  })

  return router;
};
