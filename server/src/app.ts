import express from "express";
import connectDB from "./config/db";
import errorMiddleware from "./middlewares/errorMiddleware";
import User from "./routes/user";
import Todo from "./routes/todo";
import Staff from "./routes/staff";
import Rights from "./routes/rights";

const app = express();

const initializeApp = async () => {
  try {
    await connectDB();
    app.use(express.json());

    //user routes
    app.use("/api/users", User);
    app.use("/api/staff", Staff);
    app.use("/api/rights", Rights);
    app.use("/api/todo", Todo);
    app.use("*", (req: any, res: any, error: any) => {
      return res.status(404).json({
        data: null,
        message: "no route matched",
        error: error.message,
      });
    });

    //error route
    app.use(errorMiddleware);
  } catch (err) {
    console.error("Failed to initialize the application", err);
  }
};

initializeApp();

export default app;
