import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

// GET PROFILE
router.get("/", protect, async (req, res) => {
  res.json(req.user);
});

// UPDATE PROFILE
router.put("/", protect, async (req, res) => {
  const { name, email } = req.body;

  const updated = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true }
  ).select("-password");

  res.json(updated);
});

export default router;
