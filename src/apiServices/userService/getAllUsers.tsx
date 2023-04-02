import { BASE_URL } from "../apiURL";
import { User } from "./types";

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users?limit=0`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data.users as User[];
};
