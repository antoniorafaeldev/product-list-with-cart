const buttonClasses: string =
  "absolute flex left-1/2 gap-1 -translate-x-1/2 -translate-y-6 bg-rose-50 px-4 py-2 rounded-xl text-center top-0 m-auto border-1 border-rose-500";

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
