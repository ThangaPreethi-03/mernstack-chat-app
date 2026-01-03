import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

// Optional debug (can remove later)
console.log("DEBUG MONGO_URI =>", process.env.MONGO_URI);

const PORT = process.env.PORT;

/* -------------------- MIDDLEWARES -------------------- */
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,        // ✅ allows localhost + Vercel automatically
    credentials: true,   // ✅ required for cookies/JWT
  })
);

app.get("/", (req, res) => {
  res.send("Backend is alive");
});

/* -------------------- ROUTES -------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/* -------------------- SERVER START -------------------- */
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
