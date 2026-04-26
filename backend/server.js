import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://double-j-gulf-services.onrender.com"
    ],
    credentials: true,
  })
);

// ROUTES
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/orders.js";

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Root
app.get("/", (req, res) => {
  res.send("Double J Gulf Services API is running");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
