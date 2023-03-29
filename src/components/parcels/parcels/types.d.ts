import { Carrier, Item, Parcel, Shipment } from '../../../interfaces';

export interface ParcelsAttributes extends HTMLAttributes<HTMLDivElement> {
	carriers?: Carrier[];
	items?: Item[];
	parcels?: Parcel[];
	shipment?: Shipment;
	onSelect?(id: string): void;
}
