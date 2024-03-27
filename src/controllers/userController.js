const users = require('../models/userSchema');
const {validationResponse,successResponse,errorResponse} = require('../exception/responseFormat')

const signUp = async (req, res) => {
    const { name, email, mobileNumber, fileUpload, role, password } = req.body;
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Regular expression for mobile number validation starting with 6, 7, 8, or 9
    const mobileRegex = /^[6-9]\d{9}$/;
    
    // Check if email is valid
    if (!emailRegex.test(email)) {
        return res.status(400).json(errorResponse(400, "Invalid email format"));
    }
    
    // Check if mobile number is valid
    if (!mobileRegex.test(mobileNumber)) {
        return res.status(400).json(errorResponse(400, "Invalid mobile number"));
    }
        const createUser = await users.create({
            name,
            email,
            mobileNumber,
            fileUpload,
            role,
            password
        });

        res.status(200).json(successResponse(200, "User created successfully", createUser));
    } catch (error) {
        res.status(500).json(errorResponse());
    }
}

module.exports = {
    signUp
};
