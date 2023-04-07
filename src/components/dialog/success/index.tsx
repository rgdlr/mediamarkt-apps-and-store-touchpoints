import { ReactElement, useEffect, useState } from 'react';
import { Button, Dialog, Svg } from '../../../components';
import { CustomDialogAttributes } from '../../../components/types.d';
import { Position } from '../../../constants';
import { useTranslate } from '../../../hooks';

export function DialogSuccess(attributes: CustomDialogAttributes): ReactElement {
	const { open, position = Position.CENTER, ...restAttributes } = attributes;

	const { translate } = useTranslate();

	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => void setIsOpen(open), [open]);

	const closeDialog = () => void setIsOpen(false);

	const body = (
		<>
			<div className='dialog__icon'>
				<Svg icon='success'></Svg>
			</div>
			<p className='dialog__text'>{translate('Parcel successfully delivered to the carrier')}</p>
		</>
	);

	const footer = <Button onClick={closeDialog}>{translate('go to parcel list')}</Button>;

	return (
		<Dialog
			{...restAttributes}
			body={body}
			footer={footer}
			open={isOpen}
			position={position}></Dialog>
	);
}
