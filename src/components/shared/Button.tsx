const buttonClasses: string =
  "absolute flex left-1/2 gap-1 -translate-x-1/2 -translate-y-6 bg-rose-50 px-4 py-2 rounded-xl text-center top-0 m-auto border-1 border-rose-500 cursor-pointer transition-all duration-300 hover:text-red-500 hover:border-red-500 hover:scale-105 active:scale-95";

export function Button() {
  return (
    <div className="relative">
      <button className={buttonClasses}>
        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
