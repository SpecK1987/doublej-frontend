// GET /api/admin/stats
router.get("/stats", async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const activeDrivers = await Driver.countDocuments({ status: "active" });
    const pendingOrders = await Order.countDocuments({ status: "pending" });

    res.json({
      totalOrders,
      activeDrivers,
      pendingOrders,
    });
  } catch (err) {
    console.error("Admin stats error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
