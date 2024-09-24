import { BasePrice, ProductObject } from "app/api/product/product.type";

function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/\s+|[-]+/g, "_")
    .toLowerCase();
}

function removeSnakeCase(str: string): string {
  if (str) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return str;
}

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PriceBreak {
  qty: number;
  price: number;
}



function getRandomData(arr: Array<ProductObject>): ProductObject {
  if (arr.length === 0) {
    throw new Error("Array must contain at least one string");
  }

  const randomIndex = getRandomInt(0, arr.length - 1);
  return arr[randomIndex];
}

function getRandomInt(min: number, max: number): number {
  const range = max - min + 1;
  const randomBytes = new Uint32Array(1);
  crypto.getRandomValues(randomBytes);

  return min + (randomBytes[0] % range);
}

export { toSnakeCase, removeSnakeCase, toTitleCase, getRandomData };
