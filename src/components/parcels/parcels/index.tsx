import { BaseSyntheticEvent, ReactElement } from 'react';
import { Parcel } from '../../../components';
import './index.css';
import { ParcelsAttributes } from './types.d';

export function Parcels(attributes: ParcelsAttributes): ReactElement {
	const { children, hidden, onSelect, shipment } = attributes;

	const setSelected = (event: BaseSyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	return (
		<section className={`parcels ${hidden ? 'parcels--out' : ''}`}>
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
