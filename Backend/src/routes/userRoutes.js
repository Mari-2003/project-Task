const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// router the api call
router.post('/signup', userController.signUp);
router.post('/login', userController.login)


module.exports = router;