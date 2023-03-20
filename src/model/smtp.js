const mongoose = require("mongoose");

const smtpSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
  },
  smtp: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    default: false,
  },
  mail_encryption: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  status:{
    type:Boolean
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Smtp = mongoose.model("Smtp", smtpSchema);

export default Smtp;
