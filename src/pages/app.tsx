import { Parcels } from '../components';
import { useFetch } from '../hooks';
import { Carrier, Parcel } from '../interfaces';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('src/mocks/carriers.json');
	const { data: parcels } = useFetch<Parcel[]>('src/mocks/parcels.json');

	return (
		<>
			<Parcels carriers={carriers} parcels={parcels}></Parcels>
		</>
	);
}
