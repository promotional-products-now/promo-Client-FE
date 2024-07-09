import axios from "axios";
import { CONTENT_BASE_URL } from "./api";
import type { ContactUsSchema } from "app/schema/contactus.schema";

const sendConactMessageApi = async (payload: ContactUsSchema) => {
  return await axios.post(`${CONTENT_BASE_URL}/enquiries`, payload);
};

export { sendConactMessageApi };
