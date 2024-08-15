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

interface Data {
  key: string;
  tags: any[];
  type: string;
  setup: number;
  indent: boolean;
  currency: string;
  lead_time: string;
  description: string;
  undecorated: boolean;
  price_breaks: PriceBreak[];
}

function getMinMaxPrice(data: Data): { minPrice: number; maxPrice: number } {
  // Check if price_breaks exists and is an array
  // console.log({ xd: data });
  if (
    data &&
    data.price_breaks &&
    Array.isArray(data.price_breaks) &&
    data.price_breaks.length > 0
  ) {
    const prices = data.price_breaks.map((item) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return { minPrice, maxPrice };
  }

  // Return default values if price_breaks is not an array or is empty
  return { minPrice: 0, maxPrice: 0 };
}

export { toSnakeCase, removeSnakeCase, getMinMaxPrice };
