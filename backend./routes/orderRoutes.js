import express from "express";
import auth from "../middleware/authMiddleware.js";
import Order from "../models/Order.js";

const router = express.Router();

// Customer: create order
router.post("/", auth, async (req, res) => {
  const order = await Order.create({
    ...req.body,
    customerId: req.user.id
  });
  res.json(order);
});

// Customer: get their orders
router.get("/", auth, async (req, res) => {
  const orders = await Order.find({ customerId: req.user.id });
  res.json(orders);
});

// Admin: get all orders
router.get("/admin/all", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ msg: "Forbidden" });

  const orders = await Order.find();
  res.json(orders);
});

// Admin: update order status
router.patch("/:id", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ msg: "Forbidden" });

  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
});

export default router;
