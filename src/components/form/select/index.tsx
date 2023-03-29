import { ReactElement } from 'react';
import { SelectAttributes } from './types.d';
import './index.css';

export function Select(attributes: SelectAttributes): ReactElement {
	const { children } = attributes;
	return (
		<select {...attributes} className='select'>
			{children}
		</select>
	);
}
