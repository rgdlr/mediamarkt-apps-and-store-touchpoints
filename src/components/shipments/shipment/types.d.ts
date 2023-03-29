import { Shipment } from '../../../interfaces';
import { CustomButtonAttributes } from '../../types.d';

export interface ShipmentAttributes extends CustomButtonAttributes {
	shipment?: Shipment;
}
