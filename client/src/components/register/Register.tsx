import { Formik, Form } from "formik";
import axios from "axios";
import { invoiceSchema, InvoiceFormData } from "../../validation/invoiceSchema";
import FormField from "./FormField";
import { Button, Card } from "@nextui-org/react";

const initialValues: InvoiceFormData = {
  invoiceNumber: "",
  invoiceDate: "",
  dueDate: "",
  customerName: "",
  unitPrice: 0,
  quantity: 0,
  cgst: 0,
  sgst: 0,
  igst: 0,
};

const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        try {
          invoiceSchema.parse(values);
        } catch (error) {
          return error.errors.reduce(
            (acc: Record<string, string>, curr) => ({
              ...acc,
              [curr.path[0]]: curr.message,
            }),
            {},
          );
        }
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const totalTax = values.cgst + values.sgst + values.igst;
          const totalPrice = values.unitPrice * values.quantity;
          const totalAmount = totalPrice + totalTax;
          const postData = {
            ...values,
            totalTax,
            totalPrice,
            totalAmount,
          };
          const response = await axios.post("/api/users/inv", postData);
          console.log("Response from server:", response.data);
          if (response.data) {
            resetForm();
          }
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Card variant="bordered" css={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
          <Form>
            <FormField label="Invoice Number" name="invoiceNumber" type="text" />
            <FormField label="Invoice Date" name="invoiceDate" type="date" />
            <FormField label="Due Date" name="dueDate" type="date" />
            <FormField label="Customer Name" name="customerName" type="text" />
            <FormField label="Unit Price" name="unitPrice" type="number" />
            <FormField label="Quantity" name="quantity" type="number" />
            <FormField label="CGST (%)" name="cgst" type="number" />
            <FormField label="SGST (%)" name="sgst" type="number" />
            <FormField label="IGST (%)" name="igst" type="number" />

            <Button type="submit" disabled={isSubmitting} shadow color="primary" auto>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export default MyForm;
