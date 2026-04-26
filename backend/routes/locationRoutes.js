import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.savedLocations || []);
});

router.post("/", auth, async (req, res) => {
  const { label, type, location } = req.body;
  const user = await User.findById(req.user.id);
  user.savedLocations.push({ label, type, location });
  await user.save();
  res.json(user.savedLocations);
});

router.delete("/:index", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.savedLocations.splice(req.params.index, 1);
  await user.save();
  res.json(user.savedLocations);
});

export default router;
