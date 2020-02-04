const jwt = require("jsonwebtoken");
const privateKey = require('../keys');

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.json({ msg: "Authorization denied!" });
  }

  try {
    const decoded = jwt.verify(token, privateKey.JwSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
