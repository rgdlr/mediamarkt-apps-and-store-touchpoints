import { ReactElement, useState } from 'react';
import { Position } from '../../../constants';
import { Button, Dialog, Svg } from '../../index';
import { CustomDialogElement } from '../dialog';

export function DialogError(props: CustomDialogElement): ReactElement {
	const [open, setOpen] = useState(props.open);

	const body = (
		<>
			<div className='dialog__icon'>
				<Svg icon='error'></Svg>
			</div>
			<p className='dialog__text'>Some information is wrong</p>
		</>
	);

	const footer = <Button onClick={() => setOpen(false)}>BACK</Button>;

	return <Dialog body={body} footer={footer} open={open} position={Position.CENTER}></Dialog>;
}
