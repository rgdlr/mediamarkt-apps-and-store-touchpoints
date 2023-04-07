import { BaseSyntheticEvent, ReactElement, useState } from 'react';
import { Button, Dialog, Form, Input, Label, Shipment, Svg } from '../../../components';
import { Icon, Shape } from '../../../constants';
import { useTranslate } from '../../../hooks';
import { ShipmentsAttributes } from './types.d';
import './index.css';

export function Shipments(attributes: ShipmentsAttributes): ReactElement {
	const { carriers, children, onSelect, parcels, shipments } = attributes;

	const { translate } = useTranslate();

	const [open, setOpen] = useState(false);

	const setSelected = (event: BaseSyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	const header = <h3 className='dialog__title'>{translate('Parcel and carrier information')}</h3>;
	const body = (
		<Form>
			<Label>{translate('ID')}</Label>
			<Input list={'parcel-id'}></Input>
			<Label>{translate('Carrier ID')}</Label>
			<Input list={'carrier-id'}></Input>
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
	const footer = <Button onClick={() => setOpen(false)}>{translate('add')?.toUpperCase()}</Button>;

	return (
		<section className='shipments'>
			<header className='shipments__header'>
				<h2>{translate('Parcel Lists')}</h2>
			</header>
			<main className='shipments__main'>
				<ul>
					{shipments
						? shipments.map((shipment) => (
								<li key={shipment.deliveryDate}>
									<Shipment shipment={shipment} onClick={setSelected}></Shipment>
								</li>
						  ))
						: children}
				</ul>
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
