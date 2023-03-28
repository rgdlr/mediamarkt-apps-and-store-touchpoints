import { Id } from "./index";

export interface Parcel {
  id: Id;
  deliveryAddress: string;
  deliveryDate: string;
  pickupAddress: string;
  pickupDate: string;
  itemsCount: number;
  items: Id[];
}
