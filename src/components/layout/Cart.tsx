import type { Cart } from "../../interfaces/cart";

export function Cart({ cart }: Cart) {
  return (
    <section className="bg-rose-50 p-4 px-6 rounded-lg md:h-fit">
      <div>
        <h2 className="text-red-500 text-2xl font-bold mb-8">
          Your Cart (
          {cart.reduce(
            (total, currentValue) => total + currentValue.quantity,
            0,
          )}
          )
        </h2>
        <img
          className="m-auto"
          src="./assets/images/illustration-empty-cart.svg"
          alt="Image of a sliced cake, signaling your cart is empty"
        />
        <p className="text-center text-rose-500 font-medium my-4">
          Your added items will appear here
        </p>
      </div>
      <div>
        {cart.map((product) => {
          return (
            <div className="flex justify-between items-center border-b border-b-rose-100 py-2">
              <div className="">
                <h3 className="text-md font-rose-900 font-semibold mb-1">
                  {product.name}
                </h3>
                <span className="px-2 text-center text-red-500">
                  {product.quantity}x
                </span>
                <span className="px-1 text-centerr text-rose-300">
                  @ ${product.unitPrice}
                </span>
                <span className="px-1 text-center text-rose-500">
                  ${product.unitPrice * product.quantity}
                </span>
              </div>
              <div>
                <button className="cursor-pointer rounded-full border border-rose-500 p-1 ">
                  <img
                    src="./assets/images/icon-remove-item.svg"
                    alt="Icon for removing items"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center py-4">
        <span>Order Total</span>
        <output className="font-bold text-xl text-rose-900">
          $
          {cart
            .reduce(
              (total, currentValue) =>
                total + currentValue.quantity * currentValue.unitPrice,
              0,
            )
            .toFixed(2)}
        </output>
      </div>
      <div className="flex text-sm gap-1 p-4 justify-center mb-4 bg-rose-100 rounded-lg">
        <img
          src="./assets/images/icon-carbon-neutral.svg"
          alt="Icon of carbon neutral delivery"
        />
        <p className="text-rose-500">
          This is a <strong className="text-rose-900">carbon neutral</strong>{" "}
          delivery
        </p>
      </div>
      <button className="p-3 cursor-pointer text-white bg-red-500 w-full rounded-xl font-medium transition-all duration-300 hover:bg-rose-500  hover:scale-101 active:scale-95">
        Confirm Order
      </button>
    </section>
  );
}
