import { atom } from "jotai";
import { ProductCardProps } from "app/components/Product/ProductCard";

export const productPreviewAtom = atom<ProductCardProps | null>(null);

export const productAtom = atom(null);