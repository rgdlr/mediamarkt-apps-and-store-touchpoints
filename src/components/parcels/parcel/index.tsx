import { ReactElement } from 'react';
import { Svg } from '../../../components';
import './index.css';
import { ParcelAttributes } from './types.d';

export function Parcel(attributes: ParcelAttributes): ReactElement {
	const { carrier, parcel } = attributes;

	return (
		<button {...attributes} className='parcel' data-id={parcel?.id.$oid}>
			<div className='parcel__icon'>
				<Svg icon='truck'></Svg>
			</div>
			<div className='parcel__information'>
				<div className='parcel__title'>Parcel List {parcel?.deliveryDate}</div>
				<div className='parcel__company'>{carrier?.companyName}</div>
				<div className='parcel__items'>{parcel?.itemsCount} items to be picked up</div>
			</div>
			<div className={`parcel__status parcel__status--${(parcel as any)?.status ?? 'delivery'}`}>
				{(parcel as any)?.status ?? 'delivery'}
			</div>
		</button>
	);
}
