export interface ShopDataModel {
  id?: string;
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
