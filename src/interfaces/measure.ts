export const enum Measures {
	Weight = 'g'
}

export const enum MeasureAmounts {
	Unit	= 1,
	Milli	= 0.001,
	Centi	= 0.01,
	Deci	= 0.1,
	Deca	= 10,
	Hecto	= 100,
	Kilo	= 1000
}

export const enum MeasureUnits {
	Unit	= '',
	Milli	= 'm',
	Centi	= 'c',
	Deci	= 'd',
	Deca	= 'D',
	Hecto	= 'h',
	Kilo	= 'k'
}

export interface Measure {
	amount: number;
	measure: string;
	unit: string;
}
