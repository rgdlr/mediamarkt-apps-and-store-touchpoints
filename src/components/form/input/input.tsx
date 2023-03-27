import { PropsWithChildren, ReactElement } from 'react';
import { Label } from '../label/label';
import './input.css';

export type JSXInputElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLInputElement>, 'children'>, 'style'>
>;

export interface CustomInputElement extends JSXInputElement {
	label?: string;
}

export function Input(props: CustomInputElement): ReactElement {
	const { label, list } = props;
	return (
		<>
			<Label>{label}</Label>
			<input className='input' list={list as unknown as string}></input>
		</>
	);
}
