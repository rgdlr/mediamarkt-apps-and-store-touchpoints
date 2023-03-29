import { ReactElement } from 'react';
import { Svg } from '../../../components';
import { ItemAttributes } from './types';
import './index.css';

export function Item(attributes: ItemAttributes): ReactElement {
	const { item } = attributes;

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
