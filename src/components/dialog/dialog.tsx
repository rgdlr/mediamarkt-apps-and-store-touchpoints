import { PropsWithChildren, ReactElement } from 'react';
import { Position } from '../../constants';
import './dialog.css';

export type JSXDialogElement = PropsWithChildren<
	Omit<Omit<Partial<HTMLDialogElement>, 'children'>, 'style'>
>;

export interface CustomDialogElement extends JSXDialogElement {
	body?: ReactElement;
	footer?: ReactElement;
	header?: ReactElement;
	open?: boolean;
	position?: Position;
}

export function Dialog(props: CustomDialogElement): JSX.Element {
	const { body, children, footer, header, open, position = Position.BOTTOM } = props;
	return (
		<div className={`dialog dialog--${position} ${open ? 'dialog--open' : ''}`}>
			<section className='dialog__window' role='dialog'>
				{header && <header className='dialog__header'>{header}</header>}
				{body && <div className='dialog__body'>{body}</div>}
				{footer && <footer className='dialog__footer'>{footer}</footer>}
				{!(header || body || footer) && children}
			</section>
		</div>
	);
}

export { DialogError } from './error/error';
export { DialogSuccess } from './success/success';
