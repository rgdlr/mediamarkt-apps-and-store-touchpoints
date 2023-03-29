import { ReactElement } from 'react';
import { computeClassNames } from '../../../utils';
import { Canvas } from '../../canvas';
import { SignatureAttributes } from './types.d';
import './index.css';

export function Signature(attributes: SignatureAttributes): ReactElement {
	const { children, className, drawable = true } = attributes;
	return (
		<Canvas
			{...attributes}
			className={computeClassNames('signature', className)}
			drawable={drawable}>
			{children}
		</Canvas>
	);
}

export type { SignatureAttributes };
