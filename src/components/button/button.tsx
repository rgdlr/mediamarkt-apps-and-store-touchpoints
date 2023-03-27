import { CSSProperties, PropsWithChildren } from 'react';
import { Shape } from '../../constants';
import './button.css';

export type JSXButtonElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLButtonElement>, 'children'>, 'style'>
>;

export interface CustomButtonElement extends JSXButtonElement {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	shape?: Shape;
	style?: CSSProperties;
}

export function Button(props: CustomButtonElement): React.ReactElement {
	const { children, onClick, shape = Shape.RECTANGLE, style } = props;
	return (
		<button style={style} className={`button button--${shape}`} onClick={onClick}>
			{children}
		</button>
	);
}
