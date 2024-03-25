export interface ParrotType {
  id: number;
  image: string;
  price: number;
  name: string;
  location: string;
  age: {
    value: number;
    unit: string;
  };
}


export interface CarouselItem {
  id: number;
  imageUrl: string;
  name: string;
  feedback: string;
  rating: number;
}
