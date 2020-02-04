const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const database = require('../db/database.js');
const privateKey = require('../keys');

module.exports = db => {
  router.get('/users', (req, res) => {
    db.query(
      `
      SELECT * from users;
    `
    )
      .then(({ rows: users }) => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).send('Server Error');
      });
  });

  //User registration
  router.post('/users', async (req, res) => {

    try {
      let newUser = req.body;

      delete newUser.password2;

      let user = await database.getUserByEmail(db, newUser.email);

      if (user.length !== 0) {
        return res.status(400).send('User already exists');
      }

      const salt = await bcrypt.genSalt(12);

      newUser.password = await bcrypt.hash(newUser.password, salt);

      user = await database.addUser(db, newUser);

      const payload = {
        user: {
          id: user[0].id
        }
      };

      jwt.sign(
        payload,
        privateKey.JwSecret,
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log('ERROR', err);
      res.status(500).send('Server Error');
    }
  });

  return router;
};
