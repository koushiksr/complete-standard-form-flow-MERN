import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

interface FormData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  customerName: string;
  unitPrice: number;
  quantity: number;
  cgst: number;
  sgst: number;
  igst: number;
}

const validationSchema = Yup.object().shape({
  invoiceNumber: Yup.string().required("Invoice Number is required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  dueDate: Yup.date().required("Due Date is required"),
  customerName: Yup.string().required("Customer Name is required"),
  unitPrice: Yup.number().required("Unit Price is required"),
  quantity: Yup.number().required("Quantity is required"),
  cgst: Yup.number()
    .min(0, "CGST must be non-negative")
    .required("CGST is required"),
  sgst: Yup.number()
    .min(0, "SGST must be non-negative")
    .required("SGST is required"),
  igst: Yup.number()
    .min(0, "IGST must be non-negative")
    .required("IGST is required"),
});

const MyForm = () => {
  const initialValues: FormData = {
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: FormData, { setSubmitting, resetForm }) => {
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
          const response = await axios.post("api/users/inv", postData);
          console.log("Response from server:", response.data);
          if (response.data) {
            setSubmitting(false);
            // resetForm();
          }
        } catch (error) {
          console.error("Error:", error);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md w-full p-10 rounded-3xl flex flex-col justify-evenly items-stretch gap-6 bg-white shadow-lg">
          <FormField label="Invoice Number" name="invoiceNumber" type="text" />
          <FormField label="Invoice Date" name="invoiceDate" type="date" />
          <FormField label="Due Date" name="dueDate" type="date" />
          <FormField label="Customer Name" name="customerName" type="text" />
          <FormField label="Unit Price" name="unitPrice" type="number" />
          <FormField label="Quantity" name="quantity" type="number" />
          <FormField label="CGST (%)" name="cgst" type="number" />
          <FormField label="SGST (%)" name="sgst" type="number" />
          <FormField label="IGST (%)" name="igst" type="number" />

          <div className="bg-slate-50 text-red-600 text-sm px-4 py-2 rounded-md">
            <ErrorMessage component="div" name="invoiceNumber" />
            <ErrorMessage component="div" name="invoiceDate" />
            <ErrorMessage component="div" name="dueDate" />
            <ErrorMessage component="div" name="customerName" />
            <ErrorMessage component="div" name="unitPrice" />
            <ErrorMessage component="div" name="quantity" />
            <ErrorMessage component="div" name="cgst" />
            <ErrorMessage component="div" name="sgst" />
            <ErrorMessage component="div" name="igst" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "bg-gray-600" : "bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 active:bg-blue-600 m-2 focus:outline-none focus:ring focus:ring-blue-500`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const FormField = ({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <label htmlFor={name} className="md:text-right">
      {label}
    </label>
    <Field
      type={type}
      id={name}
      name={name}
      className="col-span-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    />
  </div>
);

export default MyForm;
