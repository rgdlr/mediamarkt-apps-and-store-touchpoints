import { ReactElement, useState } from 'react';
import {
	Button,
	Dialog,
	DialogSuccess,
	Form,
	Input,
	Item,
	Label,
	Signature
} from '../../../components';
import { useTranslate } from '../../../hooks';
import { ItemsAttributes } from './types.d';
import './index.css';

export function Items(attributes: ItemsAttributes): ReactElement {
	const { carrier, children, items, parcel } = attributes;

	const { translate } = useTranslate();

	const [isDeliveryInformationDialogOpen, setIsDeliveryInformationDialogOpen] = useState(false);
	const [isDriversSignatureDialogOpen, setIsDriversSignatureDialogOpen] = useState(false);
	const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

	const deliveryInformationDialog = {
		header: <h3 className='dialog__title'>{translate('Delivery information')}</h3>,
		body: (
			<Form>
				<Label>{translate("Driver's name")}</Label>
				<Input value={carrier?.driver} readOnly></Input>
				<Label>{translate('License plate')}</Label>
				<Input value={carrier?.licensePlate.toUpperCase()} readOnly></Input>
			</Form>
		),
		footer: (
			<Button
				onClick={() => {
					setIsDeliveryInformationDialogOpen(false);
					setIsDriversSignatureDialogOpen(true);
				}}>
				{translate('next')}
			</Button>
		)
	};

	const driversSignatureDialog = {
		header: <h3 className='dialog__title'>{translate("Driver's signature")}</h3>,
		body: (
			<Form>
				<Label>{translate("Driver's signature")}</Label>
				<Signature></Signature>
			</Form>
		),
		footer: (
			<Button
				onClick={() => {
					setIsDriversSignatureDialogOpen(false);
					setIsSuccessDialogOpen(true);
				}}>
				{translate('save')}
			</Button>
		)
	};

	return (
		<section className='items'>
			<header className='items__header'>
				<h2>{translate('$1 Parcel List', parcel?.id.$oid.toUpperCase())}</h2>
			</header>
			<main className='items__main'>
				<ul>
					{items
						? items.map((item) => (
								<li key={item.id.$oid}>
									<Item item={item}></Item>
								</li>
						  ))
						: children}
				</ul>
			</main>
			<footer className='items__footer'>
				<Button onClick={() => setIsDeliveryInformationDialogOpen(true)}>
					{translate('delivery')}
				</Button>
			</footer>
			<Dialog
				body={deliveryInformationDialog.body}
				footer={deliveryInformationDialog.footer}
				header={deliveryInformationDialog.header}
				open={isDeliveryInformationDialogOpen}></Dialog>
			<Dialog
				body={driversSignatureDialog.body}
				footer={driversSignatureDialog.footer}
				header={driversSignatureDialog.header}
				open={isDriversSignatureDialogOpen}></Dialog>
			<DialogSuccess
				onClose={() => setIsSuccessDialogOpen(false)}
				open={isSuccessDialogOpen}></DialogSuccess>
		</section>
	);
}
