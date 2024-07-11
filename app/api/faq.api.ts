import axios from "axios";
import { CONTENT_BASE_URL } from "./api";

export const fetchFaqApi = async (query?: any) => {
  return await axios.get(`${CONTENT_BASE_URL}/faq`);
};
