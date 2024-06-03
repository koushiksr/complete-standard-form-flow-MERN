"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staff_1 = require("../controllers/staff/staff");
const router = express_1.default.Router();
router.post("/", staff_1.createStaff);
router.post("/populate", staff_1.populateStaff);
router.get("/", staff_1.getStaff);
router.put("/:id", staff_1.updateStaff);
router.delete("/:id", staff_1.deleteStaff);
exports.default = router;
