import { PropsWithChildren, ReactElement } from 'react';
import './index.css';

export type JSXFormElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLFormElement>, 'children'>, 'style'>
>;

export interface CustomFormElement extends JSXFormElement {}

export function Form(attributes: CustomFormElement): ReactElement {
	const { children } = attributes;
	return <form className='form'>{children}</form>;
}
