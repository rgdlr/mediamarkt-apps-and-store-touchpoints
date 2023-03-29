import { PropsWithChildren, ReactElement } from 'react';
import { Label } from '../../../components';
import './index.css';

export type JSXSelectElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLSelectElement>, 'children'>, 'style'>
>;

export interface CustomSelectElement extends JSXSelectElement {
	label?: string;
}

export function Select(attributes: CustomSelectElement): ReactElement {
	const { children, label } = attributes;
	return (
		<>
			<Label>{label}</Label>
			<select className='select'>{children}</select>
		</>
	);
}
