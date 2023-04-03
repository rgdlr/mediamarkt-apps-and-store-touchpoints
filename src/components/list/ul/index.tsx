import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { CustomUlAttributes } from './types.d';
import './index.css';

export function Ul(attributes: CustomUlAttributes): ReactElement {
	const { className } = attributes;
	return <ul className={computeClassNames('ul', className)}></ul>;
}

export type { CustomUlAttributes };
