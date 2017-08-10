export interface Inventory {
  id: string;
  name: string;
  imageUrl: string;
};

export interface BasketItem {
  item: Inventory;
  quantity: number;
}
