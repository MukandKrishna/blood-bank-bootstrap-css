const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

const router = express.Router();

//routes
//register || post
router.post("/register", registerController);


//login || post
router.post("/login", loginController);
//  to secure this use json web token



module.exports = router;
