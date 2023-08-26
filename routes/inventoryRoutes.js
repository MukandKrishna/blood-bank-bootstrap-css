const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {  createInventoryController } = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddelware, createInventoryController);

// email is required to pass in postman ( json file to post the details)

module.exports = router;