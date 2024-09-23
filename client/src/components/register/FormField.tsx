import { Field } from "formik";
import { Input, Spacer } from "@nextui-org/react";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
}

const FormField = ({ label, name, type }: FormFieldProps) => (
  <>
    <Field name={name}>
      {({ field, meta }: any) => (
        <>
          <Input {...field} label={label} type={type} status={meta.touched && meta.error ? "error" : "default"} fullWidth clearable helperText={meta.touched && meta.error ? meta.error : ""} helperColor="error" />
        </>
      )}
    </Field>
    <Spacer y={1.5} />
  </>
);

export default FormField;
