import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { Position } from '../../../constants';
import { DialogAttributes } from '../types.d';

export function DialogError(attributes: DialogAttributes): ReactElement {
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
				<Svg icon='error'></Svg>
			</div>
			<p className='dialog__text'>Some information is wrong</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>BACK</Button>;

	return <Dialog body={body} footer={footer} open={isOpen} position={Position.CENTER}></Dialog>;
}
