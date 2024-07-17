import axios from "axios";
import { API_BASEURL } from "./api";

export const fetchUserAccountDetailsApi = async (id: string) => {
  const result = await axios.get(`${API_BASEURL}/users/${id}`);
  return result;
};

export const updateUserDetailsApi = async (id: string, payload: any) => {
  const result = await axios.patch(`${API_BASEURL}/users/${id}`, payload);
  return result;
};
