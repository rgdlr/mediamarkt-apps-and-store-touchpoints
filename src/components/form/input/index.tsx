import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { InputAttributes } from './types.d';
import './index.css';

export function Input(attributes: InputAttributes): ReactElement {
	const { className } = attributes;
	return <input {...attributes} className={computeClassNames('input', className)}></input>;
}
