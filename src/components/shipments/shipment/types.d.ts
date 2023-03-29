import { Shipment } from '../../../interfaces';
import { ButtonAttributes } from '../../types.d';

export interface ShipmentAttributes extends ButtonAttributes {
	shipment?: Shipment;
}
