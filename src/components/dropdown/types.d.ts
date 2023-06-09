import { HTMLAttributes } from 'react';
import { Position, Shape } from '../../constants';

export interface CustomDropdownAttributes extends HTMLAttributes<HTMLDivElement> {
	onSelectOption?(id: string | number | readonly string[]): void;
	options: DropdownOption[];
	position?: Position;
	shape?: Shape;
}

export interface CustomDropdownOption {
	id: string;
	value: string;
}
