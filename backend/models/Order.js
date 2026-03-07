const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  items: [
    {
      name: String,
      price: Number
    }
  ],

  total: Number,

  status: {
    type: String,
    default: "Preparing"
  }

}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);