const DriverSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  { timestamps: true }
);
