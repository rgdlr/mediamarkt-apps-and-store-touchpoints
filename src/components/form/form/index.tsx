import { ReactElement } from 'react';
import { CustomFormAttributes } from '../../../components/types.d';
import { computeClassNames } from '../../../utils';
import './index.css';

export function Form(attributes: CustomFormAttributes): ReactElement {
	const { children, className } = attributes;
	return (
		<form {...attributes} className={computeClassNames('form', className)}>
			{children}
		</form>
	);
}

export type { CustomFormAttributes };
