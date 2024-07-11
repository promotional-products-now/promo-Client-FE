import axios from "axios";
import { API_BASEURL } from "./api";

export const fetchProductsApi = async (query?: any) => {
  return await axios.get(`${API_BASEURL}/products?limit=20&page=2`);
};
