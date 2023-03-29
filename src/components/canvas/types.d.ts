import { CanvasHTMLAttributes } from 'react';

export interface CanvasAttributes
	extends CanvasHTMLAttributes<HTMLCanvasElement>,
		CanvasRenderingContext2D {
	drawable?: boolean;
}
