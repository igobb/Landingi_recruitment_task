import { BASE_URL } from "../apiURL";
import { Cart } from "./types";

export const getAllCarts = async () => {
  const response = await fetch(`${BASE_URL}/carts`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data.carts as Cart[];
};
