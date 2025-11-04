import mongoose from "mongoose";

/**
 * Graceful Shutdown Handler
 * Properly closes database connections and server on termination signals
 */
export const setupGracefulShutdown = (server) => {
  const shutdown = async (signal) => {
    console.log(`\n${signal} received. Starting graceful shutdown...`);

    // Close server to stop accepting new connections
    server.close(async () => {
      console.log("✅ HTTP server closed");

      try {
        // Close database connection
        await mongoose.connection.close();
        console.log("✅ MongoDB connection closed");
        process.exit(0);
      } catch (err) {
        console.error("❌ Error during shutdown:", err);
        process.exit(1);
      }
    });

    // Force shutdown after 10 seconds
    setTimeout(() => {
      console.error("⚠️  Forced shutdown after timeout");
      process.exit(1);
    }, 10000);
  };

  // Listen for termination signals
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  // Handle uncaught exceptions
  process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err);
    shutdown("UNCAUGHT_EXCEPTION");
  });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (reason, promise) => {
    console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
    shutdown("UNHANDLED_REJECTION");
  });
};
