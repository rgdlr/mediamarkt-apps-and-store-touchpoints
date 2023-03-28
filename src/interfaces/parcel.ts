import { Id } from "./index";

export interface Parcel {
  id: Id;
  deliveryAdress: string;
  deliveryDate: string;
  pickupAdress: string;
  pickupDate: string;
  itemsCount: number;
  items: Id[];
}
