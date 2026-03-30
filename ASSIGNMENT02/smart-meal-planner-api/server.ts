import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import mealRoutes from "./routes/mealRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Meal Planner API is running");
});

app.use("/api/meals", mealRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});