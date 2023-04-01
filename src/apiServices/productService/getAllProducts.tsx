import { Product } from "./types";

export const getAllProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=0');
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.products as Product[];
};
