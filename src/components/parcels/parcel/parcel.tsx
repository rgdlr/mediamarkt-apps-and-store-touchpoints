import { PropsWithChildren, ReactElement } from 'react';
import { Parcel as ParcelI } from '../../../interfaces';
import './parcel.css';

export interface JSXParcelElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcel?: ParcelI;
}

export function Parcel(props: JSXParcelElement): ReactElement {
	const { parcel } = props;

	return (
		<div className='parcel'>
			<div className='parcel__information'>
				<div className='parcel__title'>Parcel List {parcel?.pickupDate}</div>
				<div className='parcel__carriers'>
					{4} carriers will pickup the parcel on {'01/11/2022'}
				</div>
				<div className='parcel__items'>{parcel?.itemsCount} items</div>
			</div>
			<div className='parcel__date'>{parcel?.deliveryDate}</div>
		</div>
	);
}
