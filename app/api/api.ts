const CONTENT_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3083"
    : "https://content-api-prd.promotionalproductsnow.au";

const API_BASEURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3002/api/v1"
    : "https://ppn-server.azurewebsites.net/api/v1";
export { CONTENT_BASE_URL, API_BASEURL };
