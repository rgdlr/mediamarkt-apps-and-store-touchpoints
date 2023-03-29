import { CanvasHTMLAttributes } from 'react';

export interface CanvasAttributes
	extends CanvasHTMLAttributes<HTMLCanvasElement>,
		Partial<CanvasRenderingContext2D> {
	drawable?: boolean;
}
