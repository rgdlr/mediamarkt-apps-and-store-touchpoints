import { PropsWithChildren, ReactElement } from 'react';
import { Carrier as CarrierI, Parcel as ParcelI } from '../../../interfaces';
import { Svg } from '../../svg/svg';
import './parcel.css';

export interface JSXParcelElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcel?: ParcelI;
	carrier?: CarrierI;
}

export function Parcel(props: JSXParcelElement): ReactElement {
	const { carrier, parcel } = props;

	return (
		<div className='parcel'>
			<div className='parcel__icon'>
				<Svg icon='truck'></Svg>
			</div>
			<div className='parcel__information'>
				<div className='parcel__title'>Parcel List {parcel?.pickupDate}</div>
				<div className='parcel__company'>{carrier?.companyName}</div>
				<div className='parcel__items'>{parcel?.itemsCount} items to be picked up</div>
			</div>
				<div className='parcel__status parcel__status--delivery'>DELIVERY</div>
		</div>
	);
}
