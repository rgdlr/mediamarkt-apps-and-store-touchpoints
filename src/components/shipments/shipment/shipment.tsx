import { PropsWithChildren, ReactElement } from 'react';
import { Parcel as ParcelI } from '../../../interfaces';
import './shipment.css';

export interface JSXShipmentElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcel?: ParcelI;
}

export function Shipment(props: JSXShipmentElement): ReactElement {
	const { parcel } = props;

	return (
		<div className='shipment'>
			<div className='shipment__information'>
				<div className='shipment__title'>Parcel List {parcel?.pickupDate}</div>
				<div className='shipment__carriers'>
					{4} carriers will pickup the parcel on {'01/11/2022'}
				</div>
				<div className='shipment__items'>{parcel?.itemsCount} items</div>
			</div>
			<div className='shipment__date'>{parcel?.deliveryDate}</div>
		</div>
	);
}
