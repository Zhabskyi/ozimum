const router = require('express').Router();
const database = require('../db/database.js');
const privateKey = require('../keys');

require("dotenv").config();
const multer = require("multer");
const AWS = require("aws-sdk");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
    router.post("/photos", upload.single("file"), async (req, res) => {
      let info = req.body;
  
      try {
        const file = req.file;
        const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;
  
        let s3bucket = new AWS.S3({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION
        });
  
        //Where you want to store your file
  
        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read"
        };
  
        s3bucket.upload(params, async (err, data) => {
          try {
            if (err) {
              res.status(500).json({ error: true, Message: err });
            } else {
              const newFileUploaded = {
                description: req.body.description,
                fileLink: s3FileURL + file.originalname,
                s3_key: params.Key
              };
              info = { ...info, photo: newFileUploaded.fileLink };
              // Add all info to database after store picture to S3
              const photos = await database.addPhoto(db, info);
              res.send(photos);
            }
          } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
          }
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

  return router;
};
