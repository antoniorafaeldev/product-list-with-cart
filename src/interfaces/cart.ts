import type { CartItem } from "./cartItem";

export interface Cart {
  cart: CartItem[];
  onItemRemoval: (name: string) => void
}
