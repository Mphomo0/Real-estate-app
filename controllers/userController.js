const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc  Register a new user
// @route /api/users/register
// @access Private
const registerUser = async(req, res) => {
    const { username, email, password } = req.body
    
    //validation
    if(!username || !email || !password) {
        res.status(400).json({message: "Please include all fields"})
    }

    //check if user already exists
    const userExists = await User.findOne({username})

    if(userExists) {
        res.status(400).json({message: "User already exists"})
    }

    //Hash the password before it is save
    
}


module.exports = {
    registerUser
}