"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const invoiceSchema = new mongoose_1.Schema({
    invoiceNumber: {
        type: String,
        required: [true, "Invoice Number is required"],
    },
    invoiceDate: {
        type: Date,
        required: [true, "Invoice Date is required"],
    },
    dueDate: {
        type: Date,
        required: [true, "Due Date is required"],
    },
    customerName: {
        type: String,
        required: [true, "Customer Name is required"],
    },
    unitPrice: {
        type: Number,
        required: [true, "Unit Price is required"],
        min: [0, "Unit Price must be non-negative"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"],
    },
    cgst: {
        type: Number,
        required: [true, "CGST is required"],
        min: [0, "CGST must be non-negative"],
        max: [100, "CGST must be less than or equal to 100"],
    },
    sgst: {
        type: Number,
        required: [true, "SGST is required"],
        min: [0, "SGST must be non-negative"],
        max: [100, "SGST must be less than or equal to 100"],
    },
    igst: {
        type: Number,
        required: [true, "IGST is required"],
        min: [0, "IGST must be non-negative"],
        max: [100, "IGST must be less than or equal to 100"],
    },
    totalTax: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    invId: {
        type: Number,
        required: true,
    },
});
exports.default = mongoose_1.default.model("Inv", invoiceSchema);
