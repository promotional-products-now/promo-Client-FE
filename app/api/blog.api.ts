import axios from "axios";
import { CONTENT_BASE_URL } from "./api";

const fetchAllBlogsApi = async (query?: any) => {
  return await axios.get(
    `${CONTENT_BASE_URL}/blog?populate=category&limit=${query && query.limit ? query.limit : 20}`,
  );
};

const fetchAllBlogsCategoryApi = async (query: any) => {
  return await axios.get(
    `${CONTENT_BASE_URL}/blog/category?category=${query.category}&page=${query.page}`,
  );
};

const fetchSingleBlogApi = async (id: string) => {
  const result = await axios.get(`${CONTENT_BASE_URL}/blog/${id}?populate=comments`);

  return result;
};

const blogCommentApi = async (params: {
  blogId: string;
  comment: string;
  author?: string;
  email: string;
  phone: string;
}) => {
  const result = await axios.post(`${CONTENT_BASE_URL}/blog/${params.blogId}/comment/`, {
    blog: params.blogId,
    body: params.comment,
    email: params.email,
    phone: params.phone,
    author: params.author,
  });
  return result;
};
export { fetchAllBlogsApi, fetchAllBlogsCategoryApi, fetchSingleBlogApi, blogCommentApi };
