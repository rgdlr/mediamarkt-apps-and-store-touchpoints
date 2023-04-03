import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { CustomLiAttributes } from './types.d';
import './index.css';

export function Li(attributes: CustomLiAttributes): ReactElement {
	const { className } = attributes;
	return <li className={computeClassNames('li', className)} role='button'></li>;
}

export type { CustomLiAttributes };
