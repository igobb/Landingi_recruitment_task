import { notify } from "../notify";

export const deleteCart = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/carts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    notify();
    return {};
  }
  const data = await response.json();
  return data;
};
