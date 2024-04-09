import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

import userRoutes from "./routes/userRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected to the database");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/restaurant", restaurantRoutes);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
