const mongoose = require('mongoose'),

// RECEIPT SCHEMA. THIS WILL BE SENT FORWARD TO 
// USER TO LOOK AT. 
const receiptSchema = new mongoose.Schema(
  {
    total: {
      type: String,
      required: true,
      trim: true
    },
    items: [
      {
        upc: {
          type: String,
          required: true,
          trim: true
        },
        price: {
          type: String,
          required: true,
          trim: true
        },
        quantity: {
          type: String,
          required: true,
          trim: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

receiptSchema.methods.toJSON = function () {
  const receipt = this;
  const receiptObject = receipt.toObject();
  return receiptObject;
};

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
