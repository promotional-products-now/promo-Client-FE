import * as yup from "yup";

export const EditAccountSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email Address is required"),
  phone: yup.string(),
  address1: yup.string().required("Address 1  is required"),
  address2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  postCode: yup.string().required("Post Code is required"),
});

export type EditAccountSchema = yup.InferType<typeof EditAccountSchema>;
