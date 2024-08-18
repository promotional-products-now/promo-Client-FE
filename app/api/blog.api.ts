import axios from "axios";
import { CONTENT_BASE_URL } from "./api";

interface BlogQuery {
  page?: number;
  limit?: number;
  title?: string;
}

const fetchAllBlogsApi = async (query: BlogQuery = {}): Promise<any> => {
  const { limit = 20, title } = query;
  const titleQuery = title ? `&title=${title}` : "";

  return await axios.get(`${CONTENT_BASE_URL}/blog?populate=category&limit=${limit}${titleQuery}`);
};


const fetchAllBlogsCategoryApi = async (query: any) => {
  return await axios.get(
    `${CONTENT_BASE_URL}/blog/category?category=${query.category}&page=${query.page}`,
  );
};

const fetchSingleBlogApi = async (slug: string) => {
  const result = await axios.get(`${CONTENT_BASE_URL}/blog/slug/${slug}?populate=comments`);

  return result;
};

const fetchBlogsCategoryApi = async () => {
  const result = await axios.get(`${CONTENT_BASE_URL}/blog-category`);

  return result;
};

const blogCommentApi = async (params: {
  firstName: string;
  lastName?: string;
  blogId: string;
  comment: string;
  author?: string;
  email: string;
  phone?: string;
}) => {
  console.log({ params });
  const result = await axios.post(`${CONTENT_BASE_URL}/blog/${params.blogId}/comment/`, {
    blog: params.blogId,
    body: params.comment,
    email: params.email,
    phone: params.phone,
    author: params.author,
    firstName: params.firstName,
    lastName: params.lastName,
  });
  return result;
};
export {
  fetchAllBlogsApi,
  tFetchAllBlogsApi,
  fetchAllBlogsCategoryApi,
  fetchSingleBlogApi,
  blogCommentApi,
  fetchBlogsCategoryApi,
};
