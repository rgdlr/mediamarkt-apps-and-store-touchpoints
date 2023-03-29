import { ButtonHTMLAttributes, ReactElement } from 'react';
import { Shape } from '../../constants';
import './button.css';

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
	shape?: Shape;
}

export function Button(attributes: ButtonAttributes): ReactElement {
	const { children, className, shape = Shape.RECTANGLE } = attributes;
	const computedClassName = `button button--${shape} ${className ?? ''}`.trim();
	return (
		<button {...attributes} className={computedClassName}>
			{children}
		</button>
	);
}
