import { Product } from "../components/layout/Product";
import data from "../data/data.json";

export function DessertsPage() {
  return (
    <section>
      <h1>Desserts</h1>
      {data.map(({ image, name, category, price }) => (
        <Product
          key={name}
          image={image}
          category={category}
          name={name}
          price={price}
        />
      ))}
    </section>
  );
}
