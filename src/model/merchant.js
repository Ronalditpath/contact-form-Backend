const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  merchantId: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Merchant = mongoose.model("Merchant", merchantSchema);

export default Merchant;
