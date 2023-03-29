import { SVGAttributes } from 'react';
import { Icon } from './icon';

export interface CustomSvgAttributes extends SVGAttributes<SVGElement> {
	icon?: Icon;
}
