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


const updatecurrentUserController=async(req,res)=>{
  const id = req.params.id;
  const {role,name,fathername,email,password,bloodgroup,contact,nukhu,akkahu}=req.body;
      let updateData;
      const salt=await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(req.body.password,salt);
      

  try {
      updateData=await userModel.findByIdAndUpdate(id,{
          role,
          name:name,
          fathername:fathername,
          bloodgroup:bloodgroup,
          contact:contact,
          nukh:nukhu,
          akkah:akkahu,
          email:email,
          password:hashedPassword
      });
      
      await updateData.save().then(()=>res.status(200).send({
          success:true,
          message:"User Upated Data Successfully",
          updateData
      }))
  } catch (error) {
      console.log(error);
  }
}

module.exports = { registerController, loginController, currentUserController, updatecurrentUserController };
