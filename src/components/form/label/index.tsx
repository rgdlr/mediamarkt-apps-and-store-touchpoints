import { ReactElement } from 'react';
import { CustomLabelAttributes } from '../../../components/types.d';
import { Position } from '../../../constants';
import { computeClassNames } from '../../../utils';
import './index.css';

export function Label(attributes: CustomLabelAttributes): ReactElement {
	const { children, className, position = Position.BOTTOM } = attributes;
	return (
		<label {...attributes} className={computeClassNames('label', `label--${position}`, className)}>
			{children}
		</label>
	);
}

export type { CustomLabelAttributes };
