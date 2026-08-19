interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductProps {
  image: Image ;
  category: string;
  name: string;
  price: number;
  onAddToCart: () => void;
}
