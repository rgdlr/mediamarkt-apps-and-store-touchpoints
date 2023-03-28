import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { Position } from '../../../constants';
import { CustomDialogElement } from '../dialog';

export function DialogError(props: CustomDialogElement): ReactElement {
	const { open, onClose } = props;
	const [isOpen, setIsOpen] = useState(props.open);

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
				<Svg icon='error'></Svg>
			</div>
			<p className='dialog__text'>Some information is wrong</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>BACK</Button>;

	return <Dialog body={body} footer={footer} open={isOpen} position={Position.CENTER}></Dialog>;
}
