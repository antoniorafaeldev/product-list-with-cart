import { useState } from "react";
import { Cart } from "../components/layout/Cart";
import { Product } from "../components/layout/Product";
import data from "../data/data.json";
import type { CartItem } from "../interfaces/cartItem";

export function DessertsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    console.log(cart);
    setCart((previousCart) => {
      const itemExists = previousCart.some(
        (item) => item.name === product.name,
      );

      if (!itemExists) {
        return [...previousCart, product];
      }

      return previousCart.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  };

  const removeFromCart = (name: string) =>{

    setCart(previousCart => {
        const updatedCart = previousCart.filter(item => item.name !== name)

        return updatedCart
    })
  }

  return (
    <section className="bg-rose-100 p-4 md:flex md:gap-8 md:justify-center  lg:gap-4 lg:pl-10 ">
      <div>
        <h1 className="text-rose-950 font-bold text-3xl mb-6">Desserts</h1>
        <div className="lg:flex lg:gap-4 lg:flex-wrap md:max-w-xl lg:max-w-2xl  xl:max-w-4xl">
          {data.map(({ image, name, category, price }) => (
            <Product
              key={name}
              image={image}
              category={category}
              name={name}
              price={price}
              onAddToCart={() => {
                addToCart({ name, quantity: 1, unitPrice: price });
              }}
            />
          ))}
        </div>
      </div>
      <Cart cart={cart} onItemRemoval={(name) => removeFromCart(name)}/>
    </section>
  );
}
