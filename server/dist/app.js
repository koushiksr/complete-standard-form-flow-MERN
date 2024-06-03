"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
const user_1 = __importDefault(require("./routes/user"));
const todo_1 = __importDefault(require("./routes/todo"));
const staff_1 = __importDefault(require("./routes/staff"));
const rights_1 = __importDefault(require("./routes/rights"));
const app = (0, express_1.default)();
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)();
        app.use(express_1.default.json());
        //user routes
        app.use("/api/users", user_1.default);
        app.use("/api/staff", staff_1.default);
        app.use("/api/rights", rights_1.default);
        app.use("/api/todo", todo_1.default);
        app.use("*", (req, res, error) => {
            return res.status(404).json({
                data: null,
                message: "no route matched",
                error: error.message,
            });
        });
        //error route
        app.use(errorMiddleware_1.default);
    }
    catch (err) {
        console.error("Failed to initialize the application", err);
    }
});
initializeApp();
exports.default = app;
