import { Parcel } from '../../../interfaces';
import { ButtonAttributes } from '../../types.d';

export interface ParcelAttributes extends ButtonAttributes {
	carrier?: Carrier;
	parcel?: Parcel;
}
