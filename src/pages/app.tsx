import { Dialog, DialogError, DialogSuccess, Parcels } from '../components';
import { getParcels } from '../services';

export function App(): JSX.Element {
	const parcels = getParcels();
	return (
		<>
			<Parcels parcels={parcels}></Parcels>
			<Dialog open></Dialog>
			<DialogSuccess></DialogSuccess>
			<DialogError></DialogError>
		</>
	);
}
