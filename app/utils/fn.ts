import { BasePrice } from "app/api/product/product.type";

function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/\s+|[-]+/g, "_")
    .toLowerCase();
}

function removeSnakeCase(str: string): string {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PriceBreak {
  qty: number;
  price: number;
}

function getMinMaxPrice(data: BasePrice): { minPrice: number; maxPrice: number } {
  // Check if price_breaks exists and is an array
  // console.log({ xd: data });
  if (data && data.priceBreaks && Array.isArray(data.priceBreaks) && data.priceBreaks.length > 0) {
    const prices = data.priceBreaks.map((item) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return { minPrice, maxPrice };
  }

  // Return default values if price_breaks is not an array or is empty
  return { minPrice: 0, maxPrice: 0 };
}

export { toSnakeCase, removeSnakeCase, getMinMaxPrice };
