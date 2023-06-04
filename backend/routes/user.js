const express = require('express');
const router = express.Router();

// Controller functions
const {loginUser, signUpUser} = require ('../controllers/userController.js');

// Login route
router.post('/login', loginUser);
// Signup route
router.post('/signup', signUpUser);



module.exports = router;