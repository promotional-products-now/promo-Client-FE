import axios from "axios";
import { API_BASEURL } from "./api";
import { ProductT } from "./types/product";

export const fetchProductsApi = async () => {
  return await axios.get(`${API_BASEURL}/products?limit=20&page=2`);
};

export const getProductInfo = async (productId: string) => {
  const { data } = await axios.get(`${API_BASEURL}/products/${productId}`);
  return data;
};
