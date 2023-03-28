import { PropsWithChildren, ReactElement } from 'react';
import { Item as ItemI } from '../../../interfaces';
import { Svg } from '../../index';
import './item.css';

export interface JSXItemElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	item?: ItemI;
}

export function Item(props: JSXItemElement): ReactElement {
	const { item } = props;

	return (
		<div className='item'>
			<div className='item__icon'>
				<Svg icon='laptop'></Svg>
			</div>
			<div className='item__information'>
				<div className='item__title'>{item?.id.$oid.toUpperCase()}</div>
				<div className='item__weight'>{item?.weigth}kg</div>
			</div>
		</div>
	);
}
