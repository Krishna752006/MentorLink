/**
 * Error Handling Middleware
 * Handles 404 errors and general application errors
 */

/**
 * 404 Not Found Handler
 * Catches requests to undefined routes
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * General Error Handler
 * Catches all errors and sends appropriate response
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const isProduction = process.env.NODE_ENV === "production";

  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: isProduction ? "🥞" : err.stack,
    ...(err.errors && { errors: err.errors }),
  });

  // Log error details
  console.error(`[Error Handler] ${err.message}`);
  if (!isProduction) {
    console.error(err.stack);
  }
};
