import axios from "axios";
import { API_BASEURL } from "./api";

export const fetchProductsApi = async () => {
  return await axios.get(`${API_BASEURL}/products?limit=20&page=2`);
};

export const getProductInfo = async (productId: string) => {
  const { data } = await axios.get(`${API_BASEURL}/products/${productId}`);
  return data;
};

export const fetchProductCategories = async () => {
  const { data } = await axios.get(`${API_BASEURL}/products/categories`);

  return data;
};

export const fetchProductByCategory = async (category: string) => {
  const res = await axios.get(`${API_BASEURL}/products/categories/${category}?limit=6`);
  return res;
};

export const fetchSubCategory = async (category: string) => {
  const res = await axios.get(`${API_BASEURL}/products/product-category/${category}?limit=20`);
  return res;
};
