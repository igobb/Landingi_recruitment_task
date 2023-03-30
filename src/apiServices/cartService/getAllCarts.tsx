import { Cart } from "./types";

export const getAllCarts = async () => {
  const response = await fetch('https://dummyjson.com/carts');
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.carts as Cart[];
};
