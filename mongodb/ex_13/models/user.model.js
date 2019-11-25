const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [2, `First name must be at least 2 characters.`]
  },
  lastName: {
    type: String,
    required: true,
    minlength: [2, `Last name must be at least 2 characters.`]
  },
  email: {
    type: String,
    required: true,
    minlength: [3, `Email must be at least 3 characters.`],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  about: String,
  dateOfBirth: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)