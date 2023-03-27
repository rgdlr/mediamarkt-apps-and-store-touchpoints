import { Parcels } from '../components';
import { getParcels } from '../services';

export function App(): JSX.Element {
	return <Parcels parcels={getParcels()}></Parcels>;
}
