import { PropsWithChildren, ReactElement } from 'react';
import { Parcel as ParcelI } from '../../../interfaces';
import './product.css';

export interface JSXProductElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcel?: ParcelI;
}

export function Product(props: JSXProductElement): ReactElement {
	const { parcel } = props;

	return (
		<div className='product'>
			<div className='product__information'>
				<div className='product__title'>Parcel List {parcel?.pickupDate}</div>
				<div className='product__carriers'>
					{4} carriers will pickup the parcel on {'01/11/2022'}
				</div>
				<div className='product__items'>{parcel?.itemsCount} items</div>
			</div>
			<div className='product__date'>{parcel?.deliveryDate}</div>
		</div>
	);
}
