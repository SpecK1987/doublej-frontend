import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/locations", locationRoutes);

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.send("Double J Gulf Services API is running");
});

// START SERVER
app.listen(5000, () => console.log("Server running on port 5000"));
