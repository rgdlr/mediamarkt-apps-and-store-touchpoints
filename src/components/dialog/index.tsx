import { ReactElement } from 'react';
import { Position } from '../../constants';
import { DialogAttributes } from './types.d';
import './index.css';

export function Dialog(attributes: DialogAttributes): ReactElement {
	const { body, children, footer, header, position = Position.BOTTOM } = attributes;
	return (
		<dialog {...attributes} className={`dialog dialog--${position}`}>
			<section className='dialog__window'>
				{header && <header className='dialog__header'>{header}</header>}
				{body && <div className='dialog__body'>{body}</div>}
				{footer && <footer className='dialog__footer'>{footer}</footer>}
				{!(header || body || footer) && children}
			</section>
		</dialog>
	);
}

export { DialogError } from './error';
export { DialogSuccess } from './success';
