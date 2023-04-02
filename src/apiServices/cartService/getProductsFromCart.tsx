import { Product } from "../productService/types";

export const getProductsFromCart = async (id:number) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.products as Product[];
};
