export interface IProduct {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  ingredients?: IIngredient[];
}

export interface IIngredient {
  name: string;
  quantity: number;
  unit: string;
}

