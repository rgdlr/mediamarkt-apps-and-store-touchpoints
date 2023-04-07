import { ReactElement } from 'react';
import { ShipmentAttributes } from './types.d';
import { useTranslate } from '../../../hooks';
import './index.css';

export function Shipment(attributes: ShipmentAttributes): ReactElement {
	const { shipment, ...restAttributes } = attributes;

	const { translate } = useTranslate();

	return (
		<button {...restAttributes} className='shipment' data-id={shipment?.deliveryDate}>
			<div className='shipment__information'>
				<div className='shipment__title'>{translate('Parcel List $1', shipment?.deliveryDate)}</div>
				<div className='shipment__carriers'>
					{translate(
						'$1 carriers will pickup the parcel $2',
						shipment?.carriersCount,
						shipment?.pickupDate
					)}
				</div>
				<div className='shipment__items'>{translate('$1 items', shipment?.itemsCount)}</div>
			</div>
			<div className='shipment__date'>{shipment?.deliveryDate}</div>
		</button>
	);
}
