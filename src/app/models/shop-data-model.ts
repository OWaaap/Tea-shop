export interface ShopDataModel {
  categoryName: string;
  kinds: [
    {
      kindName: string;
      products: [
        {
          description: string;
          img: string;
          id: string;
          price: string;
          origin: string;
          weight: string;
          title: string;
        }
      ];
    }
  ];
}
