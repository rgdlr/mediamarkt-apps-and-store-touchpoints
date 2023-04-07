import { ReactElement } from 'react';
import { CustomInputAttributes } from '../../../components/types.d';
import { computeClassNames } from '../../../utils';
import './index.css';

export function Input(attributes: CustomInputAttributes): ReactElement {
	const { className, ...restAttributes } = attributes;
	return <input {...restAttributes} className={computeClassNames('input', className)}></input>;
}

export type { CustomInputAttributes };
