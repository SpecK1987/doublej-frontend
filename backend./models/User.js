const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "customer" },
  company: String,
  phone: String,
  defaultInstructions: String,
  savedLocations: [
    {
      label: String,
      type: String, // "Boat" | "Platform" | "Business"
      location: String,
    },
  ],
});
