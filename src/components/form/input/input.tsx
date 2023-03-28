import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { Label } from '../label/label';
import './input.css';

export type JSXInputElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLInputElement>, 'children'>, 'style'>
>;

export interface CustomInputElement extends JSXInputElement {
	label?: string;
	style?: CSSProperties;
}

export function Input(props: CustomInputElement): ReactElement {
	const { label, list, readOnly, style, value } = props;
	return (
		<>
			<Label>{label}</Label>
			<input
				className='input'
				list={list as unknown as string}
				style={style}
				readOnly={readOnly}
				value={value}></input>
		</>
	);
}
