import axios from "axios";
import { API_BASEURL } from "./api";

export const signupApi = async (data: any) => {

  return await axios.post(`${API_BASEURL}/auth/signup`, data);
};

export const loginApi = async (payload: { email: string; password: string }) => {
  const result = await axios.post(`${API_BASEURL}/auth/login`, payload);

  return result;
};

export const validateOtpApi = async (payload: { email: string; otp: string }) => {
  console.log({ payload });
  return await axios.post(`${API_BASEURL}/auth/validate-user`, payload);
};

export const resendOtp = async (email: string) => {
  return await axios.post(`${API_BASEURL}/auth/resend-otp`, { email });
};

export const changePassword = async (payload: {
  email: string;
  password: string;
  confirmPassword: string;
  headers: { accessToken: string; uid: string };
}) => {
  return await axios.post(
    `${API_BASEURL}/auth/change-password`,
    { email: payload.email, password: payload.password, confirmPassword: payload.confirmPassword },
    {
      headers: {
        Authorization: `Bearer ${payload.headers.accessToken}`,
        "x-uid": payload.headers.uid,
      },
    },
  );
};
