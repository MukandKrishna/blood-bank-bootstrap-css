const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
  nameHideController,
  updateUserController,
  getUserController,
  verifyOTPController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//register || post
router.post("/register", registerController);

//login || post
router.post("/login", loginController);

// get current user
router.get("/current-user", authMiddleware, currentUserController);

router.put("/update-user", authMiddleware, updateUserController);
router.get("/get-user", authMiddleware, getUserController);

// Update  namehide ||Post
router.post("/namehidingform/:id", nameHideController);

// Add a new route for OTP verification
router.post("/verify-otp", verifyOTPController);
// Update current user ||Post
// router.put("/update_current_user/:id", updatecurrentUserController);
// router.post("/DonorForm/:id", DonorController);

module.exports = router;
