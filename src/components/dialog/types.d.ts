import { DialogHTMLAttributes } from 'react';

export interface CustomDialogAttributes extends DialogHTMLAttributes<HTMLDialogElement> {
	body?: ReactElement;
	footer?: ReactElement;
	header?: ReactElement;	
	position?: Position;
  open?: boolean;
}
