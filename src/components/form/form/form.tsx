import { PropsWithChildren, ReactElement } from 'react';
import './form.css';

export type JSXFormElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLFormElement>, 'children'>, 'style'>
>;

export interface CustomFormElement extends JSXFormElement {}

export function Form(props: CustomFormElement): ReactElement {
	const { children } = props;
	return <form className='form'>{children}</form>;
}
