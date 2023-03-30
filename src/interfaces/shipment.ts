import { Parcel } from '../interfaces';

export interface Shipment {
	carriersCount: number;
	deliveryDate: string;
	itemsCount: number;
	parcels: Parcel[];
	pickupDate: string;
}
