const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add a username'],
            unique: true,
          },
        fullName: {
            type: String,
            required: [true, 'Please add a fullname'],
          },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
          },
        phone: {
            type: String,
          },
        aboutMe: {
            type: String,
          },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
          },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)