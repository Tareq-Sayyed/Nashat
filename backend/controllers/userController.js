const User = require('../models/userModel');

// Login user.
const loginUser = async (req, res) => {
    res.json({msg: 'login user'})
}

// Signup user.
const signUpUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        res.status(201).json({email, user});
    } catch(error){
        res.status(400).json({msg: error.message});
    }
}

module.exports = { loginUser, signUpUser };