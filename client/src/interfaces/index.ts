export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: IProduct[];
}

export interface ISection {
  id: number;
  title: string;
  linkUrl: string;
  imageUrl: string;
}
