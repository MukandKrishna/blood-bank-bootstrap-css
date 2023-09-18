const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
  nameHideController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//register || post
router.post("/register", registerController);

//login || post
router.post("/login", loginController);
//  to secure this use json web token

// get current user
router.get("/current-user", authMiddleware, currentUserController);

// Update  namehide ||Post
router.put("/namehidingform", nameHideController);

// Update current user ||Post
// router.put("/update_current_user/:id", updatecurrentUserController);

module.exports = router;
