export const Icon = {
	plus: (
		<svg fill='currentColor' width='14' height='14' viewBox='0 0 14 14'>
			<path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' />
		</svg>
	)
};

export interface JSXSvgElement extends Partial<SVGElement> {
	icon: keyof typeof Icon;
}

export function Svg(props: JSXSvgElement): JSX.Element {
	const { icon } = props;
	return Icon[icon];
}
