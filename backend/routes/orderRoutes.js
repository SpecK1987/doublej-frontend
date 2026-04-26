import express from "express";
import auth from "../middleware/authMiddleware.js";
import Order from "../models/Order.js";

const router = express.Router();

// Create order
router.post("/", auth, async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      customerId: req.user.id
    });
    res.json(order);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ msg: "Server error creating order" });
  }
});

// Get customer orders with filters
router.get("/", auth, async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = { customerId: req.user.id };

    if (status && status !== "all") {
      query.status = status;
    }

    if (search && search.trim() !== "") {
      query.deliveryLocation = { $regex: search, $options: "i" };
    }

    const orders = await Order.find(query).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ msg: "Server error fetching orders" });
  }
});

// Admin: get all orders
router.get("/admin/all", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Forbidden" });
    }

    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching admin orders:", err);
    res.status(500).json({ msg: "Server error fetching admin orders" });
  }
});

// Admin: update order
router.patch("/:id", auth, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Forbidden" });
    }

    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.json(order);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ msg: "Server error updating order" });
  }
});

export default router;
