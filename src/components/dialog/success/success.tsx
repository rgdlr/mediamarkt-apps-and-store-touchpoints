import { ReactElement, useEffect, useState } from 'react';
import { Position } from '../../../constants';
import { Button, Dialog, Svg } from '../../index';
import { CustomDialogElement } from '../dialog';

export function DialogSuccess(props: CustomDialogElement): ReactElement {
	const { open, onClose } = props;
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const closeDialog = () => {
		if (typeof onClose === 'function') onClose();
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

	return <Dialog body={body} footer={footer} open={isOpen} position={Position.CENTER}></Dialog>;
}
