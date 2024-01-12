const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    hotelname: {
      type: String,
      require: [true, "name is required"],
    },
    checkin: {
      type: String,
      required: [true, "checkin is require"],
    },
    checkout: {
      type: String,
      required: [true, "checkout is require"],
    },
    adult: {
      type: String,
      required: [true, "adult is require"],
    },
    children: {
      type: String,
      required: [true, "children is require"],
    },
    days: {
      type: String,
      required: [true, "days is require"],
    },
    total: {
      type: String,
      required: [true, "total is require"],
    },
    img: {
      type: String,
      required: [true, "img is require"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required"],
    },

  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;