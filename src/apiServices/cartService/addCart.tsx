import { AddCartInterface } from "./types";


export const addCart = async (cartData:AddCartInterface) => {
  const response = await fetch('https://dummyjson.com/carts/add', {
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
    return {};
  }
  const data = await response.json();
  return data;
};
