import * as yup from "yup";

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export type ChangePasswordSchema = yup.InferType<typeof ChangePasswordSchema>;
