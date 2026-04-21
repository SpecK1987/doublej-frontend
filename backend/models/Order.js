import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: String,
  pickupLocation: String,
  deliveryLocation: String,
  goodsType: String,
  specialNotes: String,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Order", orderSchema);
