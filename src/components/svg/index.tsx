import { ReactElement } from 'react';
import { CustomSvgAttributes } from '../../components/types.d';
import { Icons } from './icon';

export function Svg(attributes: CustomSvgAttributes): ReactElement {
	const { children, icon, ...restAttributes } = attributes;
	return <>{icon ? Icons(restAttributes)[icon] : <svg {...restAttributes}>{children}</svg>}</>;
}

export type { CustomSvgAttributes };
