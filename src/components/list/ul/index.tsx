import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { CustomUlAttributes } from './types.d';
import './index.css';

export function Ul(attributes: CustomUlAttributes): ReactElement {
	const { className, ...restAttributes } = attributes;
	return <ul {...restAttributes} className={computeClassNames('ul', className)}></ul>;
}

export type { CustomUlAttributes };
