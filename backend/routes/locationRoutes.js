import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Location from "../models/Location.js";

const router = express.Router();

// SAVE LOCATION
router.post("/", protect, async (req, res) => {
  try {
    const location = await Location.create({
      user: req.user._id,
      label: req.body.label,
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng
    });

    res.json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET USER LOCATIONS
router.get("/", protect, async (req, res) => {
  const locations = await Location.find({ user: req.user._id });
  res.json(locations);
});

// DELETE LOCATION
router.delete("/:id", protect, async (req, res) => {
  await Location.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ message: "Location removed" });
});

export default router;
