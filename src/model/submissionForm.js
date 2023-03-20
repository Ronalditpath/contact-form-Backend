const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  merchantId: [{ type: Schema.Types.ObjectId, ref: "Merchant" }],
  status: {
    type: Boolean,
    required: true,
  },
  formId: [{ type: Schema.Types.ObjectId, ref: "Form" }],
  customerId: {
    type: String,
    default: null,
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

const Submited_Form = mongoose.model("Submited_Form", submissionSchema);

export default Submited_Form;
