import { ReactElement } from 'react';
import { CustomScannerAttributes } from '../../components/types';
import './index.css';

export function Scanner(attributes: CustomScannerAttributes): ReactElement {
	return <input {...attributes}></input>;
}

export type { CustomScannerAttributes };
