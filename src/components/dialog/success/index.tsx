import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { CustomDialogAttributes } from '../../../components/types.d';
import { Position } from '../../../constants';

export function DialogSuccess(attributes: CustomDialogAttributes): ReactElement {
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
				<Svg icon='success'></Svg>
			</div>
			<p className='dialog__text'>Parcel successfully delivered to the carrier</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>GO TO PARCEL LIST</Button>;

	return (
		<Dialog {...attributes} body={body} footer={footer} open={isOpen} position={position}></Dialog>
	);
}
