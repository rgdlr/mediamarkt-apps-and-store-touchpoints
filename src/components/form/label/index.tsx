import { ReactElement } from 'react';
import { Position } from '../../../constants';
import { computeClassNames } from '../../../utils';
import { LabelAttributes } from './types.d';
import './index.css';

export function Label(attributes: LabelAttributes): ReactElement {
	const { children, className, position = Position.BOTTOM } = attributes;
	return (
		<label {...attributes} className={computeClassNames('label', `label--${position}`, className)}>
			{children}
		</label>
	);
}
