import type { Product } from "../../interfaces/product";

export function Product({ image, category, title, price }: Product) {
  return (
    <div>
      <img src={image} alt={`Imagem of ${image}`} />
      <button>Add to Cart</button>
      <span>{category}</span>
      <h2>{title}</h2>
      <span>${price}</span>
    </div>
  );
}
