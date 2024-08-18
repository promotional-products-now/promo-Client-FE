import axios from "axios";
import { API_BASEURL } from "./api";

export const fetchProductsApi = async ({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}) => {
  const res = await axios.get(`${API_BASEURL}/products?limit=${limit}&page=${page}`);
  return res;
};

export const fetchProductShowCase = async (categories: string[]) => {
  const res = await axios.get(
    `${API_BASEURL}/products/product-show-case?limit=${6}&page=${1}&categories=${categories}`,
  );
  return res;
};
export const getProductInfo = async (productId: string) => {
  const { data } = await axios.get(`${API_BASEURL}/products/${productId}`);
  return data;
};

export const fetchProductCategories = async () => {
  const res = await axios.get(`${API_BASEURL}/product-category`);

  return res.data;
};

export const fetchProductByCategory = async (category: string) => {
  const res = await axios.get(`${API_BASEURL}/products/categories/${category}?limit=6`);

  return res;
};

export const fetchSubCategory = async (category: string) => {
  const res = await axios.get(`${API_BASEURL}/products/product-category/${category}?limit=20`);
  return res;
};
