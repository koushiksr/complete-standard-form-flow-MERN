"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
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
            .map((error) => error.message)
            .join(", ");
    }
    else if (err.name === "UnauthorizedError") {
        statusCode = 401;
        errorMessage = "Unauthorized";
    }
    else if (err instanceof SyntaxError) {
        statusCode = 400;
        errorMessage = "Invalid JSON payload";
    }
    else if (err.status === 404) {
        statusCode = 404;
        errorMessage = "Resource not found";
    }
    else if (err.name === "MongoError") {
        statusCode = 500;
        errorMessage = "MongoDB error: " + err.message;
    }
    else if (err.code === "ECONNREFUSED") {
        statusCode = 500;
        errorMessage = "Database connection refused";
    }
    else if (err.code === "ENOTFOUND") {
        statusCode = 500;
        errorMessage = "Network error: Host not found";
    }
    res.status(statusCode).json({ error: errorMessage });
}
exports.default = errorHandler;
