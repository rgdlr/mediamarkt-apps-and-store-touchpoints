import { ReactElement } from 'react';
import { CustomTrackingAttributes } from '../../components/types.d';
import './index.css';

export function Tracking(attributes: CustomTrackingAttributes): ReactElement {
	const { children } = attributes;
	return <section {...attributes}>{children}</section>;
}

export type { CustomTrackingAttributes };
