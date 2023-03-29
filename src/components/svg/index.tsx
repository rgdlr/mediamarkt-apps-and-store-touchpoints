import { ReactElement } from 'react';
import { CustomSvgAttributes } from '../../components/types.d';
import { Icons } from './icon';

export function Svg(attributes: CustomSvgAttributes): ReactElement {
	const { children, icon } = attributes;
	return <>{icon ? Icons[icon] : <svg {...attributes}>{children}</svg>}</>;
}

export type { CustomSvgAttributes };
