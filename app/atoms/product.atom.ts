import { atom } from "jotai";
import { ProductCardProps } from "app/components/Product/ProductCard";

export const productAtom = atom<ProductCardProps | null>(null);
