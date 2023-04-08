import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { CustomDialogAttributes } from '../../../components/types.d';
import { Position } from '../../../constants';
import { useTranslate } from '../../../hooks';

export function DialogError(attributes: CustomDialogAttributes): ReactElement {
	const { open, position = Position.CENTER, ...restAttributes } = attributes;

	const { translate } = useTranslate();

	const [isOpen, setIsOpen] = useState<boolean>(open ?? false);

	useEffect(() => {
		open && setIsOpen(open);
	}, [open]);

	const closeDialog = () => void setIsOpen(false);

	const body = (
		<>
			<div className='dialog__icon'>
				<Svg icon='error'></Svg>
			</div>
			<p className='dialog__text'>{translate('Some information is wrong')}</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>{translate('back')}</Button>;

	return (
		<Dialog
			{...restAttributes}
			body={body}
			footer={footer}
			open={isOpen}
			position={position}></Dialog>
	);
}
