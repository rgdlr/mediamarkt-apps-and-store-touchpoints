import { Id } from "./id";

export interface Item {
  id: Id;
  type: string;
  model: string;
  price: number;
  weigth: number;
}
