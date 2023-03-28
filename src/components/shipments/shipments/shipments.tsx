import { PropsWithChildren, ReactElement, SyntheticEvent, useState } from 'react';
import { Button, Dialog, Form, Input, Shipment, Svg } from '../../../components';
import { Icon, Shape } from '../../../constants';
import { Carrier as CarrierI, Parcel as ParcelI, Shipment as ShipmentI } from '../../../interfaces';
import './shipments.css';

export interface JSXShipmentsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carriers?: CarrierI[];
	parcels?: ParcelI[];
	shipments?: ShipmentI[];
	onSelect?(id: string): void;
}

export function Shipments(props: JSXShipmentsElement): ReactElement {
	const [open, setOpen] = useState(false);
	const { carriers, children, onSelect, parcels, shipments } = props;

	const setSelected = (event: SyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	const header = <h3 className='dialog__title'>Parcel and carrier information</h3>;
	const body = (
		<Form>
			<Input label='ID' list={'parcel-id' as unknown as HTMLElement}></Input>
			<Input label='Carrier ID' list={'carrier-id' as unknown as HTMLElement}></Input>
			<datalist id='carrier-id'>
				{carriers?.map((carrier) => (
					<option key={carrier.id.$oid} value={carrier.id.$oid.toUpperCase()}></option>
				))}
			</datalist>
			<datalist id='parcel-id'>
				{parcels?.map((parcel) => (
					<option key={parcel.id.$oid} value={parcel.id.$oid.toUpperCase()}></option>
				))}
			</datalist>
		</Form>
	);
	const footer = <Button onClick={() => setOpen(false)}>ADD</Button>;

	return (
		<section className='shipments'>
			<header className='shipments__header'>
				<h2>Parcel Lists</h2>
			</header>
			<main className='shipments__main'>
				{shipments
					? shipments.map((shipment) => (
							<Shipment
								key={shipment.deliveryDate}
								shipment={shipment}
								onClick={setSelected}></Shipment>
					  ))
					: children}
			</main>
			<footer className='shipments__footer'>
				<Button shape={Shape.CIRCLE} onClick={() => setOpen(true)}>
					<Svg icon={Icon.PLUS}></Svg>
				</Button>
			</footer>
			<Dialog body={body} footer={footer} header={header} open={open}></Dialog>
		</section>
	);
}
