import type { ProductProps } from "../../interfaces/product";

export function Product({ image, category, name, price }: ProductProps) {
  return (
    <div>
      <img src={image.mobile} alt={`Imagem of ${name}`} />
      <button>Add to Cart</button>
      <span>{category}</span>
      <h2>{name}</h2>
      <span>${price}</span>
    </div>
  );
}
