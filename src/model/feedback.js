const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subjectLine: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  websiteName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;