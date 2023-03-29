import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { CustomDialogAttributes } from '../../../components/types.d';
import { Position } from '../../../constants';

export function DialogError(attributes: CustomDialogAttributes): ReactElement {
	const { open, position = Position.CENTER } = attributes;
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const closeDialog = () => {
		setIsOpen(false);
	};

	const body = (
		<>
			<div className='dialog__icon'>
				<Svg icon='error'></Svg>
			</div>
			<p className='dialog__text'>Some information is wrong</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>BACK</Button>;

	return (
		<Dialog {...attributes} body={body} footer={footer} open={isOpen} position={position}></Dialog>
	);
}
