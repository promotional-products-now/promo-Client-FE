import * as yup from "yup";

export const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

export type ForgotPasswordSchema = yup.InferType<typeof ForgotPasswordSchema>;
