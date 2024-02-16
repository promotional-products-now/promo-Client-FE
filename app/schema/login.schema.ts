import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export type loginSchemaT = yup.InferType<typeof loginSchema>;
