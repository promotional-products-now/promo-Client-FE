import * as yup from "yup";

export const CommentSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().optional(),
  comment: yup.string().required("comment is required"),
  phone: yup.string().optional(),
  email: yup.string().email().required("Email is required"),
});

export type CommentSchema = yup.InferType<typeof CommentSchema>;
