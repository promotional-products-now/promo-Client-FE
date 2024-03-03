import * as yup from "yup";

export const SendPriceSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

export type SendPriceSchema = yup.InferType<typeof SendPriceSchema>;
