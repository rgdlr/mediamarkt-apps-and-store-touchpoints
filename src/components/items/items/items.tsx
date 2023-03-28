import { PropsWithChildren, ReactElement, useState } from 'react';
import { Button, Dialog, DialogSuccess, Form, Input, Item } from '../../../components';
import { Carrier as CarrierI, Item as ItemI, Parcel as ParcelI } from '../../../interfaces';
import './items.css';

export interface JSXItemsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carrier?: CarrierI;
	items?: ItemI[];
	parcel?: ParcelI;
}

export function Items(props: JSXItemsElement): ReactElement {
	const [isDeliveryInformationDialogOpen, setIsDeliveryInformationDialogOpen] = useState(false);
	const [isDriversSignatureDialogOpen, setIsDriversSignatureDialogOpen] = useState(false);
	const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
	const { carrier, children, items, parcel } = props;

	const deliveryInformationDialog = {
		header: <h3 className='dialog__title'>Delivery information</h3>,
		body: (
			<Form>
				<Input label="Driver's name" value={carrier?.driver} readOnly></Input>
				<Input label='License plate' value={carrier?.licensePlate.toUpperCase()} readOnly></Input>
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
				<Input
					style={{ backgroundColor: 'var(--blue-100)', height: '12rem' }}
					label="Driver's signature"></Input>
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
		<section className='parcels'>
			<header className='parcels__header'>
				<h2>{parcel?.id.$oid.toUpperCase()} Parcel List</h2>
			</header>
			<main className='parcels__main'>
				{items ? items.map((item) => <Item key={item.id.$oid} item={item}></Item>) : children}
			</main>
			<footer className='parcels__footer'>
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
