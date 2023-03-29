import { CustomButtonAttributes } from '../../../components/types.d';
import { Carrier, Parcel } from '../../../interfaces';

export interface ParcelAttributes extends CustomButtonAttributes {
	carrier?: Carrier;
	parcel?: Parcel;
}
