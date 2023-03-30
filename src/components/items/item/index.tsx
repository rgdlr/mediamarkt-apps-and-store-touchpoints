import { ReactElement } from 'react';
import { Svg } from '../../../components';
import { ItemTypeIcon, getIconNameByItemType } from '../../../components/svg/icon';
import './index.css';
import { ItemAttributes } from './types.d';

export function Item(attributes: ItemAttributes): ReactElement {
	const { item } = attributes;

	return (
		<div className='item'>
			<div className='item__icon'>
				<Svg
					style={{ color: 'var(--red-100)' }}
					icon={getIconNameByItemType(item?.type as ItemTypeIcon)}></Svg>
			</div>
			<div className='item__information'>
				<div className='item__title'>{item?.id.$oid.toUpperCase()}</div>
				<div className='item__weight'>{item?.weight}kg</div>
			</div>
		</div>
	);
}

export type { ItemAttributes };
