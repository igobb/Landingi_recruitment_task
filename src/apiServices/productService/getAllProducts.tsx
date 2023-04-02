import { BASE_URL } from "../apiURL";
import { Product } from "./types";

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=0`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data.products as Product[];
};
