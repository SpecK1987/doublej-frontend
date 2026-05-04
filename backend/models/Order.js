import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickup: String,
    dropoff: String,
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
