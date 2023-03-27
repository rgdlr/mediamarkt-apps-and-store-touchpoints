import { PropsWithChildren, ReactElement, useState } from 'react';
import { Icon, Shape } from '../../../constants';
import { Carrier as CarrierI, Parcel as ParcelI } from '../../../interfaces';
import { Button, Dialog, Form, Input, Parcel, Select, Svg } from '../../index';
import './parcels.css';

export interface JSXParcelsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcels?: ParcelI[];
	carriers?: CarrierI[];
}

export function Parcels(props: JSXParcelsElement): ReactElement {
	const [open, setOpen] = useState(false);
	const { carriers, children, parcels } = props;

	const header = <h3 className='dialog__title'>Parcel and carrier information</h3>;
	const body = (
		<Form>
			<Input label='ID' list={'parcel-id' as unknown as HTMLElement}></Input>
			<Select label='Carrier ID'>
				{carriers?.map((carrier) => (
					<option key={carrier.id.$oid} value={carrier.id.$oid}>
						{carrier.id.$oid.toUpperCase()}
					</option>
				))}
			</Select>
			<datalist id='parcel-id'>
				{parcels?.map((parcel) => (
					<option key={parcel.id.$oid} value={parcel.id.$oid}></option>
				))}
			</datalist>
		</Form>
	);
	const footer = <Button onClick={() => setOpen(false)}>ADD</Button>;

	return (
		<section className='parcels'>
			<header className='parcels__header'>
				<h2>Parcel Lists</h2>
			</header>
			<main className='parcels__main'>
				{parcels
					? parcels.map((parcel) => <Parcel key={parcel.id.$oid} parcel={parcel}></Parcel>)
					: children}
			</main>
			<footer className='parcels__footer'>
				<Button shape={Shape.CIRCLE} onClick={() => setOpen(true)}>
					<Svg icon={Icon.PLUS}></Svg>
				</Button>
			</footer>
			<Dialog body={body} footer={footer} header={header} open={open}></Dialog>
		</section>
	);
}
