import axios from "axios";
import { CONTENT_BASE_URL } from "./api";

const fetchAllBlogsApi = async () => {
  return await axios.get(`${CONTENT_BASE_URL}/blog`);
};

export { fetchAllBlogsApi };
