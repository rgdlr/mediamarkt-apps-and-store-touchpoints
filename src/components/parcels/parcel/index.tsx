import { ReactElement } from 'react';
import { Svg } from '../../../components';
import { useTranslate } from '../../../hooks';
import { ParcelAttributes } from './types.d';
import './index.css';

export function Parcel(attributes: ParcelAttributes): ReactElement {
	const { carrier, parcel, ...restAttributes} = attributes;

	const { translate } = useTranslate();

	return (
		<button {...restAttributes} className='parcel' data-id={parcel?.id.$oid}>
			<div className='parcel__icon'>
				<Svg icon='truck'></Svg>
			</div>
			<div className='parcel__information'>
				<div className='parcel__title'>{translate('$1 Parcel List', parcel?.id.$oid.toUpperCase())}</div>
				<div className='parcel__company'>{carrier?.companyName}</div>
				<div className='parcel__items'>
					{translate('$1 items to be picked up', parcel?.itemsCount)}
				</div>
			</div>
			<div className={`parcel__status parcel__status--${(parcel as any)?.status ?? 'delivery'}`}>
				{translate((parcel as any)?.status ?? 'delivery')?.toUpperCase()}
			</div>
		</button>
	);
}
