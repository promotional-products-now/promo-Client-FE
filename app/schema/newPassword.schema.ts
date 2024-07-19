import * as yup from "yup";

export const newPasswordSchema = yup.object().shape({
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export type newPasswordSchema = yup.InferType<typeof newPasswordSchema>;
