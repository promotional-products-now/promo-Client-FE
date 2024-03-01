import * as yup from "yup";

export const CommentSchema = yup.object().shape({
  comment: yup.string().required("comment is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email().required("Email is required"),
});

export type CommentSchema = yup.InferType<typeof CommentSchema>;
