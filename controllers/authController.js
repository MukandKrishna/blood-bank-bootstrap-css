const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../services/sendemail");
const generateOTP = require("../services/generateOTP");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });
    }
    // bcrypt: hashing the password
    const salt = await bcrypt.genSalt(10); // 10 is the number of rounds
    const hashedPassword = await bcrypt.hash(req.body.password, salt); //hashing the password
    req.body.password = hashedPassword; //assigning the hashed password to the password field

    // this one thing i added here 7:06 pm, 30/01/2024 , indicated by #*
    const otp = generateOTP();
    // #* Save OTP to user's document in the database
    req.body.otp = otp;

    //rest data
    const user = userModel(req.body);
    await user.save();

    // #* Send OTP via email
    await sendEmail(req.body.email, otp);
    // await sendEmail({ email: user.email, otp });

    res.status(201).send({
      success: true,
      message: "User registered successfully.OTP sent to your email.",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in the Register API",
      err,
    });
  }
};

// #*
// Add a new route to handle OTP verification
const verifyOTPController = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });

    // Check if the provided OTP matches the saved OTP
    if (user && user.otp === otp) {
      // Clear the OTP field in the user's document
      user.otp = undefined;
      await user.save();

      res.status(200).send({
        success: true,
        message: "OTP verified successfully. You can now login.",
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Invalid OTP",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in OTP verification",
      error,
    });
  }
};

// login call back function
//login call back
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // check role
    // if (user.role !== req.body.role) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Role does not match",
    //   });
    // }
    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    // user is valid
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

//GET CURRENT USER
const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
};

// authController.js

const updateUserController = async (req, res) => {
  try {
    if (req.body.password) {
      // bcrypt: hashing the password
      const salt = await bcrypt.genSalt(10); // 10 is the number of rounds
      const hashedPassword = await bcrypt.hash(req.body.password, salt); //hashing the password
      req.body.password = hashedPassword; //assigning the hashed password to the password field
    }
    console.log(req.body.password);
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: req.body.name,
        fname: req.body.fname,
        email: req.body.email,
        bloodgroup: req.body.bloodgroup,
        donatedate: req.body.donateddate,
        nukh: req.body.nukh,
        contact: req.body.contact,
        akaah: req.body.akaah,
        password: req.body.password,
      },
      { new: true } // option to return the modified document
    );
    res.status(200).send({ success: true, user: updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Error in updating user" });
  }
};

const getUserController = async (req, res) => {
  console.log(req.body.userId);
  try {
    const user = await userModel.findById(req.body.userId);
    res.status(200).send({ success: true, user });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, message: "Error in getting user", err });
  }
};

// namehide / or update user page
const nameHideController = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      fathername,
      password,
      email,
      bloodgroup,
      contact,
      donatedate,
      nukh,
      akaah,
      hideName,
    } = req.body;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    if (req.body.password) {
      // bcrypt: hashing the password
      const salt = await bcrypt.genSalt(10); // 10 is the number of rounds
      const hashedPassword = await bcrypt.hash(req.body.password, salt); //hashing the password
      req.body.password = hashedPassword; //assigning the hashed password to the password field
    }

    user.name = name || user.name;
    user.fathername = fathername || user.fathername;
    user.password = req.body.password || user.password;
    user.email = email || user.email;
    user.bloodgroup = bloodgroup || user.bloodgroup;
    user.contact = contact || user.contact;
    user.donatedate = donatedate || user.donatedate;
    user.nukh = nukh || user.nukh;
    user.akaah = akaah || user.akaah;
    user.hideName = hideName || user.hideName;

    await user.save();

    res.status(200).send({
      success: true,
      message: "User data updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating user data",
      error,
    });
  }
};
// namehide / or update user page

module.exports = {
  registerController,
  loginController,
  currentUserController,
  // updatecurrentUserController,
  updateUserController,
  getUserController,
  nameHideController,
  verifyOTPController,
};
