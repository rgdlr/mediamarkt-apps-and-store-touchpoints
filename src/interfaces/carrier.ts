import { Id } from "./index";

export interface Carrier {
  id: Id;
  companyName: string;
  driver: string;
  licensePlate: string;
  centerAdress: string;
}
