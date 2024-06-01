// src/config/config.ts
import dotenv from 'dotenv';

// Determine which .env file to use based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

// Load the environment variables from the determined file
dotenv.config({ path: envFile });

export default {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
};
