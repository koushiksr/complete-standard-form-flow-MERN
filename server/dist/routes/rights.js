"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rights_1 = require("../controllers/rights/rights");
const router = express_1.default.Router();
router.post("/", rights_1.createRights);
router.post("/populate", rights_1.populateRights);
router.get("/", rights_1.getRights);
router.put("/:id", rights_1.updateRights);
router.delete("/:id", rights_1.deleteRights);
exports.default = router;
