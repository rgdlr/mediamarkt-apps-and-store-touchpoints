import { CanvasHTMLAttributes } from 'react';

export interface CustomCanvasAttributes extends CanvasHTMLAttributes<HTMLCanvasElement>, Partial<CanvasRenderingContext2D> {}
