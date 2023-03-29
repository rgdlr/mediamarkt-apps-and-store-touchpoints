import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { Position } from '../../../constants';
import './index.css';

export type JSXLabelElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLLabelElement>, 'children'>, 'style'>
>;

export interface CustomLabelElement extends JSXLabelElement {
	position?: Position;
	style?: CSSProperties;
}

export function Label(props: CustomLabelElement): ReactElement {
	const { children, className, position = Position.BOTTOM, style } = props;
	return (
		<label className={`label label--${position} ${className}`} style={style}>
			{children}
		</label>
	);
}
