import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const connectDB = async () => {
  try {
    console.log("DB MONGO_URI =>", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
