const bcrypt = require('bcrypt')

const users = require('../models/userSchema');
const {validationResponse,successResponse,errorResponse} = require('../exception/responseFormat');
const sendNotificationMail = require("../utils/emailNotification")

const signUp = async (req, res) => {
    const { name, email, mobileNumber, role, password } = req.body;
    const fileUpload = req.file;
    try {

        if (!name) {
            return res.status(400).json(validationResponse(400, "Name is required"));
        } else if (!email) {
            return res.status(400).json(validationResponse(400, "Email is required"));
        }  else if (!mobileNumber) {
            return res.status(400).json(validationResponse(400, "Mobile number is required"));
        } else if (!fileUpload) {
            return res.status(400).json(validationResponse(400, "File upload is required"));
        } else if (!password) {
            return res.status(400).json(validationResponse(400, "Password is required"));
        }
        

    // email validation checking email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //mobile number validation starting with 6, 7, 8, or 9
    const mobileRegex = /^[6-9]\d{9}$/;
    
    // Check if email is valid
    if (!emailRegex.test(email)) {
        return res.status(400).json(validationResponse(400, "Invalid email format"));
    }

    //email already in database or not 
    const existingEmail = await users.findOne({
        email
    });

    if(existingEmail){
        return res.status(409).json(validationResponse(400, "Email already Registered"));
    }
    
    // Check if mobile number is valid
    if (!mobileRegex.test(mobileNumber)) {
        return res.status(400).json(validationResponse(400, "Invalid mobile number"));
    }

    //mobile number already registered or not 
    const existingMobileNumber = await users.findOne({
        mobileNumber
    });

     // Password validation: at least 8 characters, one uppercase, one special symbol
     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

     // Check if password meets requirements
     if (!passwordRegex.test(password)) {
        return res.status(400).json(validationResponse(400, "Password must be at least 8 characters long and contain at least one uppercase letter and one special symbol"));
    }

    if(existingMobileNumber){
        return res.status(409).json(validationResponse(400, "mobile number already Registered"));   
    }
     // Check if file upload is an image
     if (!fileUpload || !fileUpload.mimetype.startsWith('image/')) {
        return res.status(400).json(validationResponse(400, "File upload must be an image"));
    }

       // Hash the password using bcrypt
       const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await users.create({
            name,
            email,
            mobileNumber,
            fileUpload,
            role,
            password: hashedPassword
        });

    res.status(200).json(successResponse(200, "User created successfully", newUser));
    } catch (error) {
        res.status(500).json(errorResponse());
    }
}




const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || email.length === 0) {
            return res.status(400).json(validationResponse(400, "Email is Required"));
        }

        if (!password || password.length === 0) {
            return res.status(400).json(validationResponse(400, "Password is Required"));
        }

        // Email validation: checking email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if email is valid
        if (!emailRegex.test(email)) {
            return res.status(400).json(validationResponse(400, "Invalid email format"));
        }

        const userDetails = await users.findOne({ email });

        // Check if user exists
        if (!userDetails) {
            return res.status(401).json(validationResponse(401, "User not found"));
        }

        // Check if password is correct
        const passwordMatch = await bcrypt.compare(password, userDetails.password);
        if (!passwordMatch) {
            return res.status(401).json(validationResponse(401, "Invalid password"));
        }

        // Generate access token
        const accessToken = jwt.sign({ userId: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        // Generate refresh token
        const refreshToken = jwt.sign({ userId: existingUser._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        const data = {
            accessToken,
            refreshToken,
            userDetails
        };

        res.status(200).json(successResponse(200, "Login Successfully", data));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorResponse());
    }
};



const sendOtp = async(req,res)=>{
    const {email} =req.body;
     try{
        const sendNotification = await sendNotificationMail(email,"verifyOtp")
        res.status(200).json(successResponse(200,"Email Send Successfully",sendNotification))

    }catch(error){
        console.log(error);
        res.status(500).json(errorResponse());

    }
}


const getOneUserDetails = async(req,res)=>{
   try{
    const findUser = await users.find({
        id:req.user[0]._id,
    });
    res.status(200).json(successResponse(200,"User Retrieve Successfully",findUser))

}catch(error){
    console.log(error);
    res.status(500).json(errorResponse());
}
}


const getAllUserDetails = async(req,res)=>{
    try{
        const findAllUser = await users.findAll();
        res.statsu(200).json(successResponse(200,"All User Details Retrieve Successfully",findAllUser))
    }catch(error){
    console.log(error);
    res.status(500).json(errorResponse()); 
    }
}


module.exports = {
    signUp,
    login,
    sendOtp,
    getOneUserDetails,
    getAllUserDetails
};
