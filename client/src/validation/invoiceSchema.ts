import { z } from "zod";

export const invoiceSchema = z.object({
  invoiceNumber: z.string().nonempty("Invoice Number is required"),
  invoiceDate: z.string().nonempty("Invoice Date is required"),
  dueDate: z.string().nonempty("Due Date is required"),
  customerName: z.string().nonempty("Customer Name is required"),
  unitPrice: z.number().positive("Unit Price must be positive"),
  quantity: z.number().positive("Quantity must be positive"),
  cgst: z.number().min(0, "CGST must be non-negative"),
  sgst: z.number().min(0, "SGST must be non-negative"),
  igst: z.number().min(0, "IGST must be non-negative"),
});

export type InvoiceFormData = z.infer<typeof invoiceSchema>;
