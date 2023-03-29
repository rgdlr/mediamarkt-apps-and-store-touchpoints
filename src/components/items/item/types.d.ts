import { Item } from '../../../interfaces';
import { CustomButtonAttributes } from '../../types.d';

export interface ItemAttributes extends CustomButtonAttributes {
	item?: Item;
}
