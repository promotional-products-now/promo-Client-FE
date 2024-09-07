import axios from "axios";
import { API_BASEURL } from "../api";

const fetchAdvertsApi = async () => {
  const { data } = await axios.get(`${API_BASEURL}/adverts`);
  return data;
};

export { fetchAdvertsApi };
