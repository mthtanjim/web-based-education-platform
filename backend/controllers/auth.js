const { post } = require("../routes/auth");
const { hashPassword, comparePassword } = require("../helpers/auth");
var jwt = require("jsonwebtoken");
const User = require("../models/User");
// this to fix  before saving
// add validation
// check if email is taken
// hash password

const register = async (req, res) => {
  try {
    //1. destracture name email pass form req.body
    const { name, username, email, password } = req.body;
    console.log("req.body", req.body)
    //2. check all fields require validation
    if (!username.trim()) {
      return res.json({ error: "username is required" });
    }
    if (!email) {
      return res.json({ error: "Eail is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "password not valied" });
    }
    //3. check if email is taken
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      console.log("esists", existsUser);
      return res.json({ error: "user is taken" });
    }
    //4. hash password
    const hashedPass = await hashPassword(password);
    //5. register the user
    const user = await new User({
      username,
      name,
      email,
      password: hashedPass,
    }).save();
    //6. create sign token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        courses: user.courses,
        profilePicture: user.profilePicture,
      },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    //1. destracture name email pass form req.body
    const { email, password } = req.body;
    //2. check all fields require validation
    if (!email) {
      return res.json({ error: "meail is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "password not valied" });
    }
    //3. check if email is taken
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "user not found.." });
    }
    //4. compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({ error: "wrong password" });
    }
    //5. create sign token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send response
    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const users = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, username, password, phone, address } = req.body;
    const user = await User.findById(req.user._id);
    //check password length
    if (password && password.length < 6) {
      return res.json({
        error: "password is required and should be min 6 characters long",
      });
    }
    // hash the password
    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updated = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        username: username || user.username,
        password: hashedPassword || user.password,
        address: address || user.address,
        phone: phone || user.phone,
      },
      { new: true }
    );

    updated.password = undefined;
    res.json(updated);
  } catch (err) {
    console.log("Found Error in update profile", err);
  }
};

const secret = async (req, res, next) => {
  // console.log("curent users:=>", req.decoded)
  res.json({ currentUser: req.user });
};

module.exports = { register, login, users, secret, updateProfile };
