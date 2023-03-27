import { useState } from 'react';
import { Position } from '../../../constants';
import { Button, Dialog, Svg } from '../../index';
import { CustomDialogElement } from '../dialog';

export function DialogSuccess(props: CustomDialogElement): JSX.Element {
	const [open, setOpen] = useState(props.open);

	const body = (
		<>
			<div className='dialog__icon'>
				<Svg icon='success'></Svg>
			</div>
			<p className='dialog__text'>Parcel successfully delivered to the carrier</p>
		</>
	);

	const footer = <Button onClick={() => setOpen(false)}>GO TO PARCEL LIST</Button>;

	return <Dialog body={body} footer={footer} position={Position.CENTER} open={open}></Dialog>;
}
