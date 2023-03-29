import { ReactElement } from 'react';
import { Shape } from '../../constants';
import { ButtonAttributes } from './types.d';
import './index.css';

export function Button(attributes: ButtonAttributes): ReactElement {
	const { children, className, shape = Shape.RECTANGLE } = attributes;
	const computedClassName = `button button--${shape} ${className ?? ''}`.trim();
	return (
		<button {...attributes} className={computedClassName}>
			{children}
		</button>
	);
}
