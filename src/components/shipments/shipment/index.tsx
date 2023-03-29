import { ReactElement } from 'react';
import { ShipmentAttributes } from './types.d';
import './index.css';

export function Shipment(attributes: ShipmentAttributes): ReactElement {
	const { shipment } = attributes;

	return (
		<button {...attributes} className='shipment' data-id={shipment?.deliveryDate}>
			<div className='shipment__information'>
				<div className='shipment__title'>Parcel List {shipment?.deliveryDate}</div>
				<div className='shipment__carriers'>
					{4} carriers will pickup the parcel on {'01/11/2022'}
				</div>
				<div className='shipment__items'>{shipment?.parcels.length} items</div>
			</div>
			<div className='shipment__date'>{shipment?.deliveryDate}</div>
		</button>
	);
}
