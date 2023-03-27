import { PropsWithChildren, ReactElement } from 'react';

export type JSXInputElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLButtonElement>, 'children'>, 'style'>
>;

export interface CustomInputElement extends JSXInputElement {}

export function Input(props: CustomInputElement): ReactElement {
	return (
		<>
			<input className='input'></input>
		</>
	);
}
