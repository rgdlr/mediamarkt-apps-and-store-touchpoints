import { DialogHTMLAttributes } from 'react';

export interface DialogAttributes extends DialogHTMLAttributes<HTMLDialogElement> {
	body?: ReactElement;
	footer?: ReactElement;
	header?: ReactElement;	
	position?: Position;
  open?: boolean;
}
