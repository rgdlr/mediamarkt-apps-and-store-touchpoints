import { Id } from '../interfaces';

export interface Item {
	id: Id;
	type: string;
	model: string;
	price: number;
	weight: number;
}
