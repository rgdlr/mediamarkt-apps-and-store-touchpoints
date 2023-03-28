import { Id } from './../interfaces';

export interface Carrier {
	id: Id;
	companyName: string;
	driver: string;
	licensePlate: string;
	centerAddress: string;
}
