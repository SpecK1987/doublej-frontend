import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickupLocation: String,
    deliveryLocation: String,
    goodsType: String,
    specialNotes: String,
    status: {
      type: String,
      enum: ["pending", "scheduled", "in_transit", "delivered"],
      default: "pending"
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
