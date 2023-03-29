import { ReactElement } from 'react';
import { CustomSelectAttributes } from '../../../components/types.d';
import './index.css';

export function Select(attributes: CustomSelectAttributes): ReactElement {
	const { children } = attributes;
	return (
		<select {...attributes} className='select'>
			{children}
		</select>
	);
}

export type { CustomSelectAttributes };
