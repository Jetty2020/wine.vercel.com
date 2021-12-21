export interface Beer {
  price: string;
  name: string;
  rating: {
    average: number;
    reviews: number;
  };
  location: string;
  image: string;
  id: number;
}
