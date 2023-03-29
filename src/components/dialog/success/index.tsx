import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { Position } from '../../../constants';
import { DialogAttributes } from '../types.d';

export function DialogSuccess(attributes: DialogAttributes): ReactElement {
	const { open } = attributes;
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

	return <Dialog body={body} footer={footer} open={isOpen} position={Position.CENTER}></Dialog>;
}
