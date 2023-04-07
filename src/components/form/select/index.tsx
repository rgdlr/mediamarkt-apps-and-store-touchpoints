import { ReactElement } from 'react';
import { CustomSelectAttributes } from '../../../components/types.d';
import './index.css';

export function Select(attributes: CustomSelectAttributes): ReactElement {
	const { children, ...restAttributes } = attributes;
	return (
		<select {...restAttributes} className='select'>
			{children}
		</select>
	);
}

export type { CustomSelectAttributes };
