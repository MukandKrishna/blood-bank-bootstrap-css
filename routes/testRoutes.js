const express = require('express');
const { testController } = require('../controllers/testController');
// const { Mode } = require('@mui/icons-material');

// router object
const router = express.Router();

// routes
router.get('/', testController);

//export
module.exports = router;