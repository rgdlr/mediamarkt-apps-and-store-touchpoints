import { ReactElement } from 'react';
import { CustomButtonAttributes } from '../../components/types.d';
import { Shape } from '../../constants';
import { computeClassNames } from '../../utils';
import './index.css';

export function Button(attributes: CustomButtonAttributes): ReactElement {
	const { children, className, shape = Shape.RECTANGLE, ...restAttributes } = attributes;

	return (
		<button
			{...restAttributes}
			className={computeClassNames('button', `button--${shape}`, className)}>
			{children}
		</button>
	);
}

export type { CustomButtonAttributes };
