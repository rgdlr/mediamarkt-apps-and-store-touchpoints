import { PropsWithChildren, ReactElement } from 'react';
import { Position } from '../../constants';
import './label.css';

export type JSXLabelElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLLabelElement>, 'children'>, 'style'>
>;

export interface CustomLabelElement extends JSXLabelElement {
	position?: Position;
}

export function Label(props: CustomLabelElement): ReactElement {
	const { children, position = Position.BOTTOM } = props;
	return <label className={`label label--${position}`}>{children}</label>;
}
