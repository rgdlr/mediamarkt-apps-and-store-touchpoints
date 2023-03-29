import { BaseSyntheticEvent, PropsWithChildren, ReactElement } from 'react';
import { Parcel } from '../../../components';
import {
	Carrier as CarrierI,
	Item as ItemI,
	Parcel as ParcelI,
	Shipment as ShipmentI
} from '../../../interfaces';
import './index.css';

export interface JSXParcelsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carriers?: CarrierI[];
	items?: ItemI[];
	parcels?: ParcelI[];
	shipment?: ShipmentI;
	onSelect?(id: string): void;
}

export function Parcels(props: JSXParcelsElement): ReactElement {
	const { children, onSelect, shipment } = props;

	const setSelected = (event: BaseSyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	return (
		<section className='parcels'>
			<header className='parcels__header'>
				<h2>Parcel List {shipment?.deliveryDate}</h2>
			</header>
			<main className='parcels__main'>
				<ul>
					{shipment
						? shipment.parcels.map((parcel) => (
								<li key={parcel.id.$oid}>
									<Parcel parcel={parcel} onClick={setSelected}></Parcel>
								</li>
						  ))
						: children}
				</ul>
			</main>
		</section>
	);
}
