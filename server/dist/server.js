"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const startServer = () => {
    try {
        app_1.default.listen(config_1.default.port, () => console.log(`Server running on port ${config_1.default.port}`));
    }
    catch (err) {
        console.error("Failed to start the server", err);
        process.exit(1);
    }
};
startServer();
