"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.todoSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
});
exports.default = (0, mongoose_1.model)("Todo", exports.todoSchema);
