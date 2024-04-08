import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected to the database");
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
