import { PropsWithChildren, ReactElement } from 'react';
import { Label } from '../../index';
import './select.css';

export type JSXSelectElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLSelectElement>, 'children'>, 'style'>
>;

export interface CustomSelectElement extends JSXSelectElement {
	label?: string;
}

export function Select(props: CustomSelectElement): ReactElement {
	const { children, label } = props;
	return (
		<>
			<Label>{label}</Label>
			<select className='select'>{children}</select>
		</>
	);
}