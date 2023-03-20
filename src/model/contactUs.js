const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subjectLine: {
    type: String,
    required: true
  },
  contactNumber: {
    type: Number,
    required: true,
},
  message: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const contactUs = mongoose.model('ContactUs', contactUsSchema);

export default contactUs