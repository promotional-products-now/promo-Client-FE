import axios from "axios";
import { CONTENT_BASE_URL } from "./api";

const fetchAllBlogsApi = async () => {
  return await axios.get(`${CONTENT_BASE_URL}/blog?populate=category`);
};

const fetchAllBlogsCategoryApi = async (arg: string) => {
  return await axios.get(`${CONTENT_BASE_URL}/blog/category?category=${arg}`);
};
export { fetchAllBlogsApi, fetchAllBlogsCategoryApi };
