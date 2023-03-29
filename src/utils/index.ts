const EMPTY = '';
const SPACE = ' ';

export function computeClassNames(...classNames: Array<string | undefined>) {
	return classNames
		.map((className) => className ?? EMPTY)
		.join(SPACE)
		.trim();
}
