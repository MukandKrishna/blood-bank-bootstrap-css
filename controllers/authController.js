const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    //rest data
    const user = userModel(req.body);
    await user.save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
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
    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Role does not match",
      });
    }
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
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: req.body.name,
        fname: req.body.fname,
        email: req.body.email,
        bloodgroup: req.body.bloodgroup,
        donateddate: req.body.donateddate,
        nukh: req.body.nukh,
        contact: req.body.contact,
        akaah: req.body.akaah,
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
  try {
    const user = await userModel.findById(req.user._id);
    res.status(200).send({ success: true, user });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, message: "Error in getting user", err });
  }
};

// const nameHideController = async (req, res) => {
//   const id = req.params.id;
//   const {
//     name,
//     fathername,
//     email,
//     bloodgroup,
//     donatedate,
//     nukh,
//     contact,
//     akaah,
//   } = req.body;
//   let updateData;
//   // const salt = await bcrypt.genSalt(10);
//   // const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   try {
//     updateData = await userModel.findByIdAndUpdate(id, {
//       name: name,
//       fathername: fathername,
//       bloodgroup: bloodgroup,
//       contact: contact,
//       nukh: nukh,
//       akaah: akaah,
//       email: email,
//       donatedate:donatedate
//     });

//     await updateData.save().then(() =>
//       res.status(200).send({
//         success: true,
//         message: "User Updated Data Successfully",
//         updateData,
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

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
      donateddate,
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

    user.name = name || user.name;
    user.fathername = fathername || user.fathername;
    user.password = password || user.password;
    user.email = email || user.email;
    user.bloodgroup = bloodgroup || user.bloodgroup;
    user.contact = contact || user.contact;
    user.donatedate = donateddate || user.donatedate;
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

module.exports = {
  registerController,
  loginController,
  currentUserController,
  // updatecurrentUserController,
  updateUserController,
  getUserController,
  nameHideController,
};
