const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Static signup method.
userSchema.statics.signup = async function(email, password) {
    // Validation.
    if(!email || !password){ throw Error('All fields must be filled.'); }
    else{
        if(!validator.isEmail(email)){ throw Error('Invalid email.'); }
        if(!validator.isStrongPassword(password)){ throw Error('Password is not secure enough.'); }
    }
    const exists = await this.findOne({email});
    if(exists){
        throw Error('Email already in use.');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({email, password: hashedPassword});

    return user;
}

module.exports = mongoose.model('User', userSchema);