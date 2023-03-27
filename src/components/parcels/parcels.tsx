import { PropsWithChildren } from 'react';
import { Icon, Shape } from '../../constants';
import { Parcel as ParcelI } from '../../interfaces';
import { Button, Parcel, Svg } from '../index';
import './parcels.css';

export interface JSXParcelsElement extends PropsWithChildren<Partial<HTMLDivElement>> {
	parcels?: ParcelI[];
}

export function Parcels(props: JSXParcelsElement): JSX.Element {
	const { children, parcels } = props;

	return (
		<section className='parcels'>
			<header className='parcels__header'>
				<h1>Parcel Lists</h1>
			</header>
			<main className='parcels__main'>
				{parcels
					? parcels.map((parcel) => <Parcel key={parcel.id.$oid} parcel={parcel}></Parcel>)
					: children}
			</main>
			<footer className='parcels__footer'>
				<Button shape={Shape.CIRCLE}>
					<Svg icon={Icon.PLUS}></Svg>
				</Button>
			</footer>
		</section>
	);
}
