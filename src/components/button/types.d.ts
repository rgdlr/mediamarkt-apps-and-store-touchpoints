import { ButtonHTMLAttributes } from 'react';
import { Shape } from '../../constants';

export interface CustomButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
	shape?: Shape;
}
