const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireSignin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.decoded);

  if (user?.role == 1) {
    console.log("Condition is Okey");
    next();
  } else {
    res.status(401).send("Unauthorized..");
  }
};

module.exports = { requireSignin, isAdmin };
