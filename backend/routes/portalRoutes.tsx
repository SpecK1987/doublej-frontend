// GET /api/portal/stats
router.get("/stats", async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware

    const totalOrders = await Order.countDocuments({ user: userId });
    const activeOrders = await Order.countDocuments({
      user: userId,
      status: { $in: ["pending", "in-progress"] }
    });

    const lastOrder = await Order.findOne({ user: userId })
      .sort({ createdAt: -1 })
      .select("dropoff");

    res.json({
      totalOrders,
      activeOrders,
      lastOrderDestination: lastOrder?.dropoff || ""
    });
  } catch (err) {
    console.error("Portal stats error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
