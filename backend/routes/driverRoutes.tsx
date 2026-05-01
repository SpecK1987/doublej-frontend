// GET /api/admin/drivers
router.get("/drivers", async (req, res) => {
  try {
    const drivers = await Driver.find().sort({ name: 1 });
    res.json(drivers);
  } catch (err) {
    console.error("Driver fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
