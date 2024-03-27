const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// router the api call
router.post('/signup', userController.signUp)


module.exports = router;