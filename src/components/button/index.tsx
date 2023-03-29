import { ReactElement } from 'react';
import { Shape } from '../../constants';
import { computeClassNames } from '../../utils';
import { ButtonAttributes } from './types.d';
import './index.css';

export function Button(attributes: ButtonAttributes): ReactElement {
	const { children, className, shape = Shape.RECTANGLE } = attributes;
	return (
		<button {...attributes} className={computeClassNames('button', `button--${shape}`, className)}>
			{children}
		</button>
	);
}
