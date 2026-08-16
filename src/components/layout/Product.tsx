import type { ProductProps } from "../../interfaces/product";
import { Button } from "../shared/Button";

export function Product({ image, category, name, price }: ProductProps) {
  return (
    <div className="py-2">
      <img
        className="rounded-lg lg:w-xs xl:w-2xs"
        src={image.mobile}
        alt={`Imagem of ${name}`}
      />
      <Button />
      <span className="mt-4 block font-thin">{category}</span>
      <h2 className="font-bold">{name}</h2>
      <span className="text-red-500">${price}</span>
    </div>
  );
}
