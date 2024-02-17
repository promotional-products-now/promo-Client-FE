import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export type LoginSchema = yup.InferType<typeof LoginSchema>;
