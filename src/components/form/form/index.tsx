import { ReactElement } from 'react';
import { FormAttributes } from './types.d';
import { computeClassNames } from '../../../utils';
import './index.css';

export function Form(attributes: FormAttributes): ReactElement {
	const { children, className } = attributes;
	return (
		<form {...attributes} className={computeClassNames('form', className)}>
			{children}
		</form>
	);
}
