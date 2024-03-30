const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require("../controllers/userController");
const {verifyToken} = require('../Middleware/verifyToken');

const upload = multer({dest:'uploads/'})

// Route the API calls
router.post('/signup', upload.single("fileUpload"), userController.signUp);
router.post('/login', userController.login);
router.post('/sendotp', userController.sendOtp);
router.get('/profile/:id',  userController.getOneUserDetails);
router.get('/alluser', userController.getAllUserDetails);

module.exports = router;
