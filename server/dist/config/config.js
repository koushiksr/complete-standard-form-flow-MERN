"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/config.ts
const dotenv_1 = __importDefault(require("dotenv"));
// Determine which .env file to use based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
// Load the environment variables from the determined file
dotenv_1.default.config({ path: envFile });
exports.default = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || '',
    jwtSecret: process.env.JWT_SECRET || '',
};
