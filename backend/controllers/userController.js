const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Creating a token.
const createToken = (_id) => {
    // 1st argument: payload. 2nd argument: secret. 3rd argument: options.
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}


// Login user.
const loginUser = async (req, res) => {
    res.json({msg: 'login user'})
}

// Signup user.
const signUpUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        // Create token.
        const token = createToken(user._id);
        // Set cookie.
        // res.cookie('jwt', token, {httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000});
        res.status(201).json({email, token});
    } catch(error){
        res.status(400).json({msg: error.message});
    }
}

module.exports = { loginUser, signUpUser };