import * as yup from "yup";

export const ContactUsSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  email: yup.string().email().required("Your email is required"),
  phone: yup.string().required("Your phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Provide a message"),
});

export type ContactUsSchema = yup.InferType<typeof ContactUsSchema>;
