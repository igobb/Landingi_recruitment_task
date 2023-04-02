import { AddCartInterface } from "./types";
import { notify } from "../notify";
import { BASE_URL } from "../apiURL";

export const addCart = async (cartData:AddCartInterface) => {
  const response = await fetch(`${BASE_URL}/carts/add`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      userId: cartData.userId,
      products: [
        {
          id: cartData.productId,
          quantity: cartData.productQuantity,
        }
      ]
    }),
  });
  if (!response.ok) {
    notify();
    return {};
  }
  const data = await response.json();
  return data;
};
