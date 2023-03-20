const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  merchantId: [{ type: Schema.Types.ObjectId, ref: "Merchant" }],
  status: {
    type: Boolean,
    required: true,
  },
  feilds: {
    type: Array,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.model("Form", formSchema);

export default Form;
