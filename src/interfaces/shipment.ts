import { Parcel } from './index';

export interface Shipment {
	deliveryDate: string;
	parcels: Parcel[];
}
