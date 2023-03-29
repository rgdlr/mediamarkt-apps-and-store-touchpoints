import { HTMLAttributes } from 'react';
import { Carrier, Item, Parcel } from '../../../interfaces';

export interface ItemsAttributes extends HTMLAttributes<HTMLDivElement> {
	carrier?: Carrier;
	items?: Item[];
	parcel?: Parcel;
}
