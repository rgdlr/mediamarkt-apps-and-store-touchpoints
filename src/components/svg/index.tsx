import { ReactElement } from 'react';
import { Icons } from './icon';
import { CustomSvgAttributes } from './types';

export function Svg(attributes: CustomSvgAttributes): ReactElement {
	const { children, icon } = attributes;
	return <>{icon ? Icons[icon] : <svg {...attributes}>{children}</svg>}</>;
}
