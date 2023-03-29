import { ButtonHTMLAttributes } from 'react';

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
	shape?: Shape;
}
