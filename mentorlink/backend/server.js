import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import corsOptions from "./middleware/corsConfig.js";
import requestLogger from "./middleware/requestLogger.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { setupGracefulShutdown } from "./utils/gracefulShutdown.js";
import cors from "cors";

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["MONGO_URI", "PORT", "JWT_SECRET"];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
if (missingEnvVars.length > 0) {
  console.error(`❌ Missing required environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5001;
const NODE_ENV = process.env.NODE_ENV || "development";

// ============ DATABASE CONNECTION ============
connectDB();

// ============ MIDDLEWARE ============
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors(corsOptions));
app.use(requestLogger);

// ============ ROUTES ============
app.use("/api/auth", authRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
  });
});

// ============ ERROR HANDLING ============
app.use(notFound);
app.use(errorHandler);

// ============ SERVER STARTUP ============
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} [${NODE_ENV}]`);
});

// ============ GRACEFUL SHUTDOWN ============
setupGracefulShutdown(server);
