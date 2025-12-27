export interface ParrotType {
  id: number;
  image: string;
  price: number;
  name: string;
  breed?: string;
  scientificName?: string;
  description?: string;
  location: string;
  breeder?: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  skills?: string[];
  age: {
    value: number;
    unit: string;
  };
  gender?: string;
  color?: string;
  size?: string;
  weight?: string;
  diet?: string;
  lifespan?: string;
  temperament?: string;
}


export interface CarouselItem {
  id: number;
  imageUrl: string;
  name: string;
  feedback: string;
  rating: number;
}
