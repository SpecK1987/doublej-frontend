import mongoose from "mongoose";

const savedLocationSchema = new mongoose.Schema({
  label: String,
  type: String,
  location: String
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "customer" },
    company: String,
    phone: String,
    defaultInstructions: String,
    savedLocations: [savedLocationSchema]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
