import mongoose, { Schema } from "mongoose";

const invoiceSchema: Schema = new Schema({
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

export default mongoose.model("Inv", invoiceSchema);
