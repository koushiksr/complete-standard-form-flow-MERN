"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user/user");
const router = express_1.default.Router();
router.post("/register", user_1.registerUser);
router.post("/inv", user_1.postInv);
router.get("/register", user_1.getRegisterUser);
router.put("/register", user_1.updateRegisterUser);
router.delete("/register", user_1.deleteRegisterUser);
exports.default = router;
