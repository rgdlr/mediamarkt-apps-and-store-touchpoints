import { ReactElement } from 'react';
import { Svg } from '../../../components';
import { ParcelAttributes } from './types';
import './index.css';

export function Parcel(attributes: ParcelAttributes): ReactElement {
	const { carrier, parcel, onClick } = attributes;

	return (
		<button className='parcel' data-id={parcel?.id.$oid} onClick={onClick}>
			<div className='parcel__icon'>
				<Svg icon='truck'></Svg>
			</div>
			<div className='parcel__information'>
				<div className='parcel__title'>Parcel List {parcel?.pickupDate}</div>
				<div className='parcel__company'>{carrier?.companyName}</div>
				<div className='parcel__items'>{parcel?.itemsCount} items to be picked up</div>
			</div>
			<div className='parcel__status parcel__status--delivery'>DELIVERY</div>
		</button>
	);
}
