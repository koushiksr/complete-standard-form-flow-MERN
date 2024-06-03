// src/config/db.ts
import mongoose from "mongoose";
import config from "./config";

const connectDB = async (): Promise<void> => {
  try {
    if (
      !config.mongoURI.startsWith("mongodb://") &&
      !config.mongoURI.startsWith("mongodb+srv://")
    ) {
      throw new Error(
        'Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"'
      );
    }

    await mongoose.connect(config.mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
};

export default connectDB;
