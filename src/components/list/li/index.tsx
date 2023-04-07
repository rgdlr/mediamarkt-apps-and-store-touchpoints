import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { CustomLiAttributes } from './types.d';
import './index.css';

export function Li(attributes: CustomLiAttributes): ReactElement {
	const { className, ...restAttributes } = attributes;
	return <li {...restAttributes} className={computeClassNames('li', className)} role='button'></li>;
}

export type { CustomLiAttributes };
