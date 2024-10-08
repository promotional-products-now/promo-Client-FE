const CONTENT_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://content-api-prd.promotionalproductsnow.au" //"http://localhost:8080"
    : "https://content-api-prd.promotionalproductsnow.au";

const API_BASEURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3002/api/v1"
    : "https://api-prd.promotionalproductsnow.au/api/v1";

export { CONTENT_BASE_URL, API_BASEURL };
