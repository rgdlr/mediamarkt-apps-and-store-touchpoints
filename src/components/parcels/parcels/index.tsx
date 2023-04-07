import { BaseSyntheticEvent, ReactElement } from 'react';
import { Parcel } from '../../../components';
import { useTranslate } from '../../../hooks';
import { ParcelsAttributes } from './types.d';
import './index.css';

export function Parcels(attributes: ParcelsAttributes): ReactElement {
	const { carriers, children, hidden, onSelect, shipment } = attributes;

	const { translate } = useTranslate();

	const setSelected = (event: BaseSyntheticEvent) => {
		const id = event.currentTarget.getAttribute('data-id');
		if (typeof onSelect === 'function') onSelect(id ?? '');
	};

	return (
		<section className={`parcels ${hidden ? 'parcels--out' : ''}`}>
			<header className='parcels__header'>
				<h2>{translate('$1 Parcel List', shipment?.deliveryDate)}</h2>
			</header>
			<main className='parcels__main'>
				<ul>
					{shipment
						? shipment.parcels.map((parcel, index) => (
								<li key={parcel.id.$oid}>
									<Parcel
										carrier={carriers?.at(index)}
										onClick={setSelected}
										parcel={parcel}></Parcel>
								</li>
						  ))
						: children}
				</ul>
			</main>
		</section>
	);
}
