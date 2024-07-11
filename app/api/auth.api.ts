import axios from "axios";
import { API_BASEURL } from "./api";

export const signupApi = async (data: any) => {
  return await axios.post(`${API_BASEURL}/auth/signup`, data);
};

export const loginApi = async (payload: { email: string; password: string }) => {
  console.log({ payload });
  const result = await axios.post(`${API_BASEURL}/auth/login`, payload);
  console.log({ result, payload });
  return result; 
};

export const validatOtpApi = async (payload: { email: string; otp: string }) => {
  return await axios.post(`${API_BASEURL}/auth/validate-user`, payload);
};
