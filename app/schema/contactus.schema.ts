import * as yup from "yup";

export const ContactUsSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.string().required("phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("message is required"),
});

export type ContactUsSchema = yup.InferType<typeof ContactUsSchema>;
