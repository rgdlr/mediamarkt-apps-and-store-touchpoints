import { PropsWithChildren, ReactElement, SyntheticEvent } from 'react';
import {
	Carrier as CarrierI,
	Item as ItemI,
	Parcel as ParcelI,
	Shipment as ShipmentI
} from '../../../interfaces';
import { Parcel } from '../../index';
import './parcels.css';

export interface JSXParcelsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carriers?: CarrierI[];
	items?: ItemI[];
	parcels?: ParcelI[];
	shipment?: ShipmentI;
	onSelect?(id: string): void;
}

export function Parcels(props: JSXParcelsElement): ReactElement {
	const { children, onSelect, shipment } = props;

	const setSelected = (event: SyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	return (
		<>
			<section className='parcels'>
				<header className='parcels__header'>
					<h2>Parcel List {shipment?.deliveryDate}</h2>
				</header>
				<main className='parcels__main'>
					{shipment
						? shipment.parcels.map((parcel) => (
								<Parcel key={parcel.id.$oid} parcel={parcel} onClick={setSelected}></Parcel>
						  ))
						: children}
				</main>
			</section>
		</>
	);
}
