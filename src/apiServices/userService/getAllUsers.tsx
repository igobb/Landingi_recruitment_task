import { User } from "./types";

export const getAllUsers = async () => {
  const response = await fetch('https://dummyjson.com/users?limit=0');
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data.users as User[];
};
