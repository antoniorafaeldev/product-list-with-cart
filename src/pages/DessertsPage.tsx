import { Cart } from "../components/layout/Cart";
import { Product } from "../components/layout/Product";
import data from "../data/data.json";

export function DessertsPage() {
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
            />
          ))}
        </div>
      </div>
      <Cart />
    </section>
  );
}
