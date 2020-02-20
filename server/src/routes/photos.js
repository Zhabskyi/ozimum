const router = require('express').Router();
const database = require('../db/database.js');
const privateKey = require('../keys');

// get user api/auth, private

module.exports = db => {
  router.get('/photos', async (req, res) => {
    try {
      // const user = await database.getUserPhotos(db, req.user.id);
      // res.json(user);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  return router;
};
