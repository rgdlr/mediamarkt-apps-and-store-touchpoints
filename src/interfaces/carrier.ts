import { Id } from "./id";

export interface Carrier {
  id: Id;
  companyName: string;
  driver: string;
  licensePlate: string;
  centerAdress: string;
}
