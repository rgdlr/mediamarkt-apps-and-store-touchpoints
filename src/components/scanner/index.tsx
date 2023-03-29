import { ReactElement } from 'react';
import { CustomScannerAttributes } from '../../components/types.d';
import './index.css';

export function Scanner(attributes: CustomScannerAttributes): ReactElement {
	return <input {...attributes}></input>;
}

export type { CustomScannerAttributes };
