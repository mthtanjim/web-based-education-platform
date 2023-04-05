const express = require("express");
const router = express.Router();

//middlewares 
const { requireSignin, isAdmin, isInstructor } = require("../middlewares/auth");
//controllers
const {
  register,
  login,
  users,
  secret,
  updateProfile,
} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

router.get("/users", requireSignin, isAdmin, users);
router.get("/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});
router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
  res.json({ ok: true });
});
router.get("/instructor-check", requireSignin, isInstructor, (req, res) => {
  res.json({ ok: true });
});

router.put("/profile", requireSignin, updateProfile);

// secret routes for testing
router.get("/secret", requireSignin, isAdmin, secret);

module.exports = router;
