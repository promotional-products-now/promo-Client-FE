import axios from "axios";
import { API_BASEURL } from "../api";
import { ProductObject } from "./product.type";

type ProductFilter = {
  page?: number;
  limit?: number;
  search?: string;
  colours?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
  subCategory?: string;
  supplier?: string;
  filters?: Array<string>;
  sort?: string;
};

// export const fetchProductsApi = async (params: ProductFilter) => {
//   const res = await axios.get(
//     `${API_BASEURL}/products?limit=${params.limit || 8}&page=${params.page || 1}${
//       params.search ? `&search=${params.search}` : ""
//     }${params.colours ? `&colours=${params.colours}` : ""}&minPrice=${params.minPrice}&maxPrice=${
//       params.maxPrice
//     }`,
//   );
//   return res;
// };

export const fetchProductsApi = async (params: ProductFilter) => {
  const filters = params.filters?.map((filter) => `filter=${filter}`).join("&");

  const queryParams = [
    params.page ? `page=${params.page}` : "",
    params.limit ? `limit=${params.limit}` : "limit=10",
    params.sort ? `sort=${params.sort}` : "",
    params.category ? `category=${params.category}` : "",
    params.subCategory ? `subCategory=${params.subCategory}` : "",
    params.search ? `search=${params.search}` : "",
    filters ? filters : "",
    params.colours ? params.colours : "",
    params.maxPrice ? `maxPrice=${params.maxPrice}` : "",
    params.minPrice ? `minPrice=${params.minPrice}` : "",
  ]
    .filter(Boolean)
    .join("&");

  const res = await axios.get(`${API_BASEURL}/products?${queryParams}`);
  return res;
};

export const fetchProductsTextSearchApi = async (
  params: ProductFilter,
): Promise<ProductObject[]> => {
  const { data } = await axios.get(
    `${API_BASEURL}/products/product-search${params.search ? `?search=${params.search}` : ""}${
      params.colours ? `&colours=${params.colours}` : ""
    }`,
  );
  return data;
};

export const fetchProductShowCase = async (categories: string[]) => {
  const res = await axios.get(
    `${API_BASEURL}/products/product-show-case?limit=${6}&page=${1}&categories=${categories}`,
  );
  return res;
};

export const fetchLatestProduct = async (params?: ProductFilter): Promise<ProductObject[]> => {
  const response = await axios.get(
    `${API_BASEURL}/products/latest?limit=${params?.limit || 8}&page=${params?.page || 1}`,
  );
  return response.data;
};

export const fetchProductStockLevelApi = async (productId: string) => {
  console.log({ productId });
  const response = await axios.get(`${API_BASEURL}/products/check-stock-levels/${productId}`);
  return response.data;
};

export const fetchTopSellingProductsApi = async (params?: { page: number; limit: number }) => {
  const { data } = await axios.get(
    `${API_BASEURL}/products/top-selling?page=${params?.page || 1}&limit=${params?.limit || 8}`,
  );
  return data;
};

export const fetchHotProductsApi = async (params?: { page: number; limit: number }) => {
  const { data } = await axios.get(
    `${API_BASEURL}/products/hot-products?page=${params?.page}&limit=${params?.limit || 8}`,
  );
  return data;
};

export const getProductInfo = async (slug: string) => {
  const { data } = await axios.get(`${API_BASEURL}/products/${slug}`);
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

export const fetchSubCategory = async (
  category: string,
  subCategory: string,
  pagination: { page: number; limit: number },
) => {
  const res = await axios.get(
    `${API_BASEURL}/products?page=${pagination.page || 1}&limit=${
      pagination.limit || 8
    }&category=${category}${subCategory ? `&subCategory=${subCategory}` : ""}`,
  );

  return res;
};
