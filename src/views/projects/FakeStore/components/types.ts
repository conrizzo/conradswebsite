export interface Product {
    id: number;
    title: string;
    name: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}