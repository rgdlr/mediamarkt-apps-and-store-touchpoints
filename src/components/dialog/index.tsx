import { ReactElement } from 'react';
import { Position } from '../../constants';
import { computeClassNames } from '../../utils';
import { CustomDialogAttributes } from '../../components/types.d';
import './index.css';

export function Dialog(attributes: CustomDialogAttributes): ReactElement {
	const {
		body,
		children,
		className,
		footer,
		header,
		position = Position.BOTTOM,
		...restAttributes
	} = attributes;

	return (
		<dialog
			{...restAttributes}
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
export type { CustomDialogAttributes };
