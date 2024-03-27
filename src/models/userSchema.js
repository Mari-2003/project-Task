const mongoose = require('mongoose');

const roles =["User","Admin"]
    


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    fileUpload:{
        type: String,
        required:true
    },
    role:{
        type:String,
        enum:roles,
        default: 'User'
    },
    password:{
        type:String,
        required:true
    }
});

const users =  mongoose.model('users',userSchema);
module.exports = users;