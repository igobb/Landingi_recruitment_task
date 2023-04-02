import { BASE_URL } from "../apiURL";
import { Product } from "../productService/types";

export const getProductsFromCart = async (id: number) => {
  const response = await fetch(`${BASE_URL}/carts/${id}`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data.products as Product[];
};
