import { PropsWithChildren, ReactElement } from 'react';
import { Svg } from '../../../components';
import { Item as ItemI } from '../../../interfaces';
import './index.css';

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
				<div className='item__weight'>{item?.weight}kg</div>
			</div>
		</div>
	);
}
