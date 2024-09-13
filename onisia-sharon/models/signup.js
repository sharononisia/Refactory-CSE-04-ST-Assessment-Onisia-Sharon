const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  poBox: {
    type: String,
    trim: true,
  },
  emergencyPhoneNumber: {
    type: String,
    trim: true,
  },
  passportNumber: {
    type: String,
    trim: true,
  },
  visaDocument: {
    type: String,
    trim: true,
  },
  departureCity: {
    type: String,
    trim: true,
  },
  destinationCity: {
    type: String,
    trim: true,
  },
});

signupSchema.plugin(passportLocalMongoose, {
  studentnameField: "email",
});

module.exports = mongoose.model('Signup', signupSchema);
