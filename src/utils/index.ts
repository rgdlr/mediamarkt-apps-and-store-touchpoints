import { MeasureAmounts, MeasureUnits, Measures } from '../constants';
import { Measure } from '../interfaces';

const EMPTY = '';
const SPACE = ' ';

export function computeClassNames(...classNames: Array<string | undefined>): string {
	return classNames
		.map((className) => className ?? EMPTY)
		.join(SPACE)
		.trim();
}

export function getMeasure(amount: number, measure: Measures): Measure {
	if (amount > MeasureAmounts.Kilo) {
		return {
			amount: amount / MeasureAmounts.Kilo,
			measure: `${amount / MeasureAmounts.Kilo}${MeasureUnits.Kilo}${measure}`,
			unit: `${MeasureUnits.Kilo}${measure}`
		};
	}
	return {
		amount: amount,
		measure: `${amount}${measure}`,
		unit: measure
	};
}
