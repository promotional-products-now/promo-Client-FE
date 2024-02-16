import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email Address is required"),
  phone: yup.string().required("Phone Number is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm your Password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  address1: yup.string().required("Address 1  is required"),
  address2: yup.string().required("Address 2 is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  postCode: yup.string().required("Post Code is required"),
});

export type signUpSchemaT = yup.InferType<typeof signUpSchema>;
