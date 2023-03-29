import { ReactElement } from 'react';
import { CustomInputAttributes } from '../../../components/types.d';
import { computeClassNames } from '../../../utils';
import './index.css';

export function Input(attributes: CustomInputAttributes): ReactElement {
	const { className } = attributes;
	return <input {...attributes} className={computeClassNames('input', className)}></input>;
}

export type { CustomInputAttributes };
