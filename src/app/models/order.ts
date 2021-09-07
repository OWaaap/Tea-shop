export interface Order {
  uid: string;
  products: [
    {
      id: string;
      product: {
        description: string;
        img: string;
        kindName: string;
        origin: string;
        price: number;
        title: string;
        weight: string;
      };
    }
  ];
  date: string;
  price: number;
}
