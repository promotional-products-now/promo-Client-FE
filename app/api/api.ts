const CONTENT_BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "https://content-api-dev.promotionalproductsnow.au"
    : "https://content-api-prd.promotionalproductsnow.au";

export { CONTENT_BASE_URL };
