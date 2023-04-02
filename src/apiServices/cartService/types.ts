import { Product } from "../productService/types";

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ApiResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface AddCart {
  userId: number;
  productId: number;
  productQuantity: number;
}

export interface DeleteCart {
  cartId: number;
}

export interface DeletedCart {
  deletedOn: string;
}
