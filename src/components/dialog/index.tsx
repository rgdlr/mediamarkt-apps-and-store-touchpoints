import { ReactElement } from 'react';
import { Position } from '../../constants';
import { DialogAttributes } from './types.d';
import './index.css';
import { computeClassNames } from '../../utils';

export function Dialog(attributes: DialogAttributes): ReactElement {
	const { body, children, className, footer, header, position = Position.BOTTOM } = attributes;
	return (
		<dialog
			{...attributes}
			className={computeClassNames('dialog', `dialog--${position}`, className)}>
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
