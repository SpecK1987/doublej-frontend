import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

router.put("/me", auth, async (req, res) => {
  const { name, company, phone, defaultInstructions } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name, company, phone, defaultInstructions },
    { new: true }
  ).select("-password");
  res.json(user);
});

export default router;
