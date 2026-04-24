import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./backend/models/User.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to DB");

  await User.deleteMany();

  await User.create({
    name: "Admin",
    email: "admin@doublejgulf.com",
    password: "$2a$10$123456789012345678901uQWERTYUIOPASDFGHJKL", // replace with real hash
    role: "admin",
  });

  console.log("Seed complete");
  process.exit();
}

seed();
