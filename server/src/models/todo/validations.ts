import * as yup from "yup";

export const todoValidationSchema = yup.object().shape({
  text: yup.string().required("Text is required"),
  completed: yup.boolean(),
});
