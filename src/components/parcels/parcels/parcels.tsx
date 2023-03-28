import { PropsWithChildren, ReactElement } from 'react';
import { Carrier as CarrierI, Parcel as ParcelI } from '../../../interfaces';
import { Parcel } from '../../index';
import './parcels.css';

export interface JSXParcelsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	carriers?: CarrierI[];
	parcels?: ParcelI[];
}

export function Parcels(props: JSXParcelsElement): ReactElement {
	const { carriers, children, parcels } = props;

	return (
		<section className='parcels'>
			<header className='parcels__header'>
				<h2>Parcel List</h2>
			</header>
			<main className='parcels__main'>
				{parcels
					? parcels.map((parcel) => <Parcel key={parcel.id.$oid} parcel={parcel}></Parcel>)
					: children}
			</main>
		</section>
	);
}
