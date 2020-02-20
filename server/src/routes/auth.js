const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const database = require('../db/database.js');
const privateKey = require('../keys');

// get user api/auth, private

module.exports = db => {
  router.get('/auth', auth, async (req, res) => {
    try {
      if (req.user.id === privateKey.adminEmail) {
        return;
      }
      const user = await database.getUserById(db, req.user.id);
      res.json(user);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  // add user post api/auth, public
  router.post('/auth', async (req, res) => {
    try {
      if (
        req.body.email === privateKey.adminEmail &&
        req.body.password === privateKey.adminPassword
      ) {
        const adminPayload = {
          user: {
            id: privateKey.adminEmail
          }
        };

        jwt.sign(
          adminPayload,
          privateKey.JwSecret,
          {
            expiresIn: 36000
          },
          (err, token) => {
            if (err) throw err;
            return res.json({ token, check: privateKey.adminSecret });
          }
        );
      } else {
        let user = await database.getUserByEmail(db, req.body.email);

        if (user.length === 0) {
          return res
            .status(400)
            .json({ msg: 'Can not find the user, check input!' });
        }

        const isCompare = await bcrypt.compare(
          req.body.password,
          user[0].password
        );

        if (!isCompare) {
          return res
            .status(400)
            .json({ msg: 'Wrong password, try again' });
        }

        const payload = {
          user: {
            id: user[0].id
          }
        };

        jwt.sign(
          payload,
          privateKey.JwSecret,
          {
            expiresIn: 36000
          },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  return router;
};
