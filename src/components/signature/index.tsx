import { ReactElement } from 'react';
import { Canvas } from '../../components';
import { CustomSignatureAttributes } from '../../components/types.d';
import { computeClassNames } from '../../utils';
import './index.css';

export function Signature(attributes: CustomSignatureAttributes): ReactElement {
	const { children, className, ...restAttributes } = attributes;
	return (
		<Canvas {...restAttributes} className={computeClassNames('signature', className)}>
			{children}
		</Canvas>
	);
}

export type { CustomSignatureAttributes };
