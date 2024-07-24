import axios from "axios";
import { API_BASEURL } from "../api";
import { settingsBanner } from "./types";

const fetchBannerApi = async (): Promise<settingsBanner> => {
  const result = await axios.get<settingsBanner>(`${API_BASEURL}/settings/banner`);

  return result.data;
};

export { fetchBannerApi };
