import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import './index.css';

export type JSXInputElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLInputElement>, 'children'>, 'style'>
>;

export interface CustomInputElement extends JSXInputElement {
	style?: CSSProperties;
}

export function Input(props: CustomInputElement): ReactElement {
	const { className, list, readOnly, style, value } = props;
	return (
		<input
			className={`input ${className}`}
			list={list as unknown as string}
			style={style}
			readOnly={readOnly}
			value={value}></input>
	);
}
