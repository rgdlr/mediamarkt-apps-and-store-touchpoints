import { PropsWithChildren, ReactElement, useState } from 'react';
import { Button, Dialog, DialogSuccess, Form, Input, Item, Label } from '../../../components';
import { Carrier as CarrierI, Item as ItemI, Parcel as ParcelI } from '../../../interfaces';
import './items.css';

export interface JSXItemsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carrier?: CarrierI;
	items?: ItemI[];
	parcel?: ParcelI;
}

export function Items(props: JSXItemsElement): ReactElement {
	const { carrier, children, items, parcel } = props;
	const [isDeliveryInformationDialogOpen, setIsDeliveryInformationDialogOpen] = useState(false);
	const [isDriversSignatureDialogOpen, setIsDriversSignatureDialogOpen] = useState(false);
	const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

	const deliveryInformationDialog = {
		header: <h3 className='dialog__title'>Delivery information</h3>,
		body: (
			<Form>
				<Label>Driver's name</Label>
				<Input value={carrier?.driver} readOnly></Input>
				<Label>License plate</Label>
				<Input value={carrier?.licensePlate.toUpperCase()} readOnly></Input>
			</Form>
		),
		footer: (
			<Button
				onClick={() => {
					setIsDeliveryInformationDialogOpen(false);
					setIsDriversSignatureDialogOpen(true);
				}}>
				NEXT
			</Button>
		)
	};

	const driversSignatureDialog = {
		header: <h3 className='dialog__title'>Delivery information</h3>,
		body: (
			<Form>
				<Label className='label--signature'>Driver's signature</Label>
				<Input className='input--signature'></Input>
			</Form>
		),
		footer: (
			<Button
				onClick={() => {
					setIsDriversSignatureDialogOpen(false);
					setIsSuccessDialogOpen(true);
				}}>
				SAVE
			</Button>
		)
	};

	return (
		<section className='items'>
			<header className='items__header'>
				<h2>{parcel?.id.$oid.toUpperCase()} Parcel List</h2>
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
				<Button onClick={() => setIsDeliveryInformationDialogOpen(true)}>DELIVERY</Button>
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
				open={isSuccessDialogOpen}
				onClose={() => setIsSuccessDialogOpen(false)}></DialogSuccess>
		</section>
	);
}
