import * as yup from "yup";

export const SubscribeSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
});

export type SubscribeSchema = yup.InferType<typeof SubscribeSchema>;

export const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required("Field is required"),
  lastName: yup.string().required("Field is required"),
  companyName: yup.string().required("Field is required"),
  apartment: yup.string().required("Field is required"),
  address: yup.string().required("Field is required"),
  suburb: yup.string().required("Field is required"),
  state: yup.string().required(),
  postalCode: yup.number().required("Field is required").positive().integer(),
  country: yup.string().required(),
  delivery: yup.string().required("Field is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  image: yup.string(),
  isAgreed: yup.boolean(),
  isLatitudePay: yup.boolean(),
  isSelected: yup.boolean(),
  isAnz: yup.boolean(),
});

export type CheckoutSchema = yup.InferType<typeof CheckoutSchema>;

export const CheckoutAlternateSchema = yup.object().shape({
  alternatefirstName: yup.string().required("Field is required"),
  alternatelastName: yup.string().required("Field is required"),
  alternatecompanyName: yup.string().required("Field is required"),
  alternateapartment: yup.string().required("Field is required"),
  alternateaddress: yup.string().required("Field is required"),
  alternatesubUrb: yup.string().required("Field is required"),
  alternatestate: yup.string().required(),
  alternatepostalCode: yup.number().required("Field is required").positive().integer(),
  alternatecountry: yup.string().required(),
  alternatedelivery: yup.string().required("Field is required"),
  alternateemail: yup.string().email("Invalid email address").required("Email is required"),
});
export type CheckoutAlternateSchema = yup.InferType<typeof CheckoutAlternateSchema>;