import { atom } from "jotai";
import { ProductCardProps } from "app/components/Card/ProductCard";

export const productAtom = atom<ProductCardProps | null>(null);
