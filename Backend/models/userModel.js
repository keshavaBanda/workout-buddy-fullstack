const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

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
})

//static signup method
userSchema.statics.signup = async function (email, password) {

    //Validations

    if (!email || !password) {
        throw Error("All fields required")
    }

    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Pass should be strong")
    }

    // check if email exists
    const exists = await this.findOne({ email })

    if (exists) { throw Error('Email is already Used') }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user;
}

userSchema.statics.login = async function (email, password) {

    //Validations

    if (!email || !password) {
        throw Error("All fields required")
    }

    // check if email exists
    const user = await this.findOne({ email })

    if (!user) { throw Error('Email not Existed.') }

    const match = await bcrypt.compare(password, user.password)

    if(!match){ throw Error("Please Enter Correct Password")}

    return user;
}

module.exports = mongoose.model('User', userSchema)