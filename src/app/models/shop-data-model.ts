export interface ShopDataModel {
  categories: [
    {
      categoryName: string;
      kinds: [
        {
          kindName: string;
          products: [
            {
              description: string;
              img: string;
              id: number;
              price: string;
              origin: string;
              weight: string;
              title: string;
            }
          ];
        }
      ];
    }
  ];
}
