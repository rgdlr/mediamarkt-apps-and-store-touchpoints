import { HTMLAttributes } from 'react';
import { Carrier, Parcel, Shipment } from '../../../interfaces';

export interface ShipmentsAttributes extends HTMLAttributes<HTMLDivElement> {
	carriers?: Carrier[];
	parcels?: Parcel[];
	shipments?: Shipment[];
	onSelect?(id: string): void;
}
