import { ButtonHTMLAttributes } from 'react';

export interface CustomButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
	shape?: Shape;
}
