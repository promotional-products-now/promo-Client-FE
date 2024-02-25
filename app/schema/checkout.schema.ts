import * as yup from "yup";

export const SubscribeSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
});

export type SubscribeSchema = yup.InferType<typeof SubscribeSchema>;

export const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyName: yup.string().required(),
  apartment: yup.string().required(),
  address: yup.string().required(),
  subarb: yup.string().required(),
  state: yup.string().required(),
  postalCode: yup.number().required().positive().integer(),
  country: yup.string().required(),
  delivery: yup.string().required(),
  email: yup.string().email("Invalid email address").required("Email is required"),
  image: yup.string(),
});

export type CheckoutSchema = yup.InferType<typeof CheckoutSchema>;