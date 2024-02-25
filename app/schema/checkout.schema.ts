import * as yup from "yup";


export const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyName: yup.string().required(),
  apartment: yup.string().required(),
  address: yup.string().required(),
  suburb: yup.string().required(),
  state: yup.string().required(),
  postalCode: yup.number().required().positive().integer(),
  country: yup.string().required(),
  delivery: yup.string().required(),
  email: yup.string().email("Invalid email address").required("Email is required"),
  image: yup.string(),
});

export type CheckoutSchema = yup.InferType<typeof CheckoutSchema>;
