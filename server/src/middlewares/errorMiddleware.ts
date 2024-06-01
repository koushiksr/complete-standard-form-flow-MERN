import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  console.error("Error:", err);

  let statusCode = 500;
  let errorMessage = "Internal server error";

  // Handle common error types
  if (err.name === "ValidationError") {
    statusCode = 400;
    errorMessage = Object.values(err.errors)
      .map((error: any) => error.message)
      .join(", ");
  } else if (err.name === "UnauthorizedError") {
    statusCode = 401;
    errorMessage = "Unauthorized";
  } else if (err instanceof SyntaxError) {
    statusCode = 400;
    errorMessage = "Invalid JSON payload";
  } else if (err.status === 404) {
    statusCode = 404;
    errorMessage = "Resource not found";
  } else if (err.name === "MongoError") {
    statusCode = 500;
    errorMessage = "MongoDB error: " + err.message;
  } else if (err.code === "ECONNREFUSED") {
    statusCode = 500;
    errorMessage = "Database connection refused";
  } else if (err.code === "ENOTFOUND") {
    statusCode = 500;
    errorMessage = "Network error: Host not found";
  }

  res.status(statusCode).json({ error: errorMessage });
}
