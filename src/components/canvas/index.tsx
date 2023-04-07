import { MouseEvent, ReactElement, TouchEvent, useEffect, useRef, useState } from 'react';
import { CustomCanvasAttributes } from '../../components/types.d';
import './index.css';

export function Canvas(attributes: CustomCanvasAttributes): ReactElement {
	const {
		children,
		globalAlpha = 1,
		lineCap = 'round',
		lineJoin = 'round',
		lineWidth = 1,
		strokeStyle = '#000',
		...restAttributes
	} = attributes;

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D>();
	const [isDrawing, setIsDrawing] = useState(false);

	useEffect(() => {
		if (canvasRef && canvasRef.current) {
			const canvas: HTMLCanvasElement = canvasRef.current;
			const context2D = canvas.getContext('2d');
			if (context2D) {
				context2D.globalAlpha = globalAlpha;
				context2D.lineCap = lineCap;
				context2D.lineJoin = lineJoin;
				context2D.lineWidth = lineWidth;
				context2D.strokeStyle = strokeStyle;
				setContext(context2D);
			}
		}
	}, [canvasRef, globalAlpha, lineCap, lineJoin, lineWidth, strokeStyle]);

	const onMouseDown = (event: MouseEvent) => {
		context?.beginPath();
		context?.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
		setIsDrawing(true);
	};

	const onTouchStart = (event: TouchEvent) => {
		context?.beginPath();
		context?.moveTo(event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY);
		setIsDrawing(true);
	};

	const onMouseUp = () => {
		context?.closePath();
		setIsDrawing(false);
	};

	const onTouchEnd = onMouseUp;

	const onMouseMove = (event: MouseEvent) => {
		if (!isDrawing) {
			return;
		}
		context?.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
		context?.stroke();
	};

	const onTouchMove = (event: TouchEvent) => {
		if (!isDrawing) {
			return;
		}
		context?.lineTo(event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY);
		context?.stroke();
	};

	return (
		<canvas
			{...restAttributes}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			onTouchMove={onTouchMove}
			ref={canvasRef}>
			{children}
		</canvas>
	);
}

export type { CustomCanvasAttributes };
