import { Items, Parcels, Shipments } from '../components';
import { useFetch } from '../hooks';
import { Carrier, Item, Parcel } from '../interfaces';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('src/mocks/carriers.json');
	const { data: items } = useFetch<Item[]>('src/mocks/items.json');
	const { data: parcels } = useFetch<Parcel[]>('src/mocks/parcels.json');

	return (
		<>
			{/* <Shipments carriers={carriers} parcels={parcels}></Shipments> */}
			{/* <Parcels carriers={carriers} parcels={parcels}></Parcels> */}
			<Items carrier={carriers?.shift()} items={items} parcel={parcels?.shift()}></Items>
		</>
	);
}
