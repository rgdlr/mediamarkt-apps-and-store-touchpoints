import { Parcel } from '../interfaces';

export interface Shipment {
	deliveryDate: string;
	parcels: Parcel[];
}
