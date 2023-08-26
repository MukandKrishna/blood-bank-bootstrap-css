const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// create inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    // validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a hospital");
    // }
    // // save inventory
    // const inventory = new inventoryModel(req.body);
    // await inventory.save();
    // res.status(201).send({
    //   success: true,
    //   message: "New Blood Record Added",
    //   inventory,
    // });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in the Register API",
      error,
    });
  }
};

module.exports = { createInventoryController };
