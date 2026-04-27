import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    label: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number },
    lng: { type: Number }
  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);
