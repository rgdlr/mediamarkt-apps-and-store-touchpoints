import { Button, Dialog, DialogError, DialogSuccess, Input, Parcels, Select } from '../components';
import { getParcels } from '../services';

export function App(): JSX.Element {
	const parcels = getParcels();
	return (
		<>
			<Parcels parcels={parcels}></Parcels>
			<Dialog open>
				<header className='dialog__header'>
					<h3 className='dialog__title'>Parcel and carrier information</h3>
				</header>
				<div className='dialog__body'>
					{/* <Input label='ID'></Input>
					<Select>
						<option value=''></option>
					</Select> */}
				</div>
				<footer className='dialog__footer'>
					<Button>ADD</Button>
				</footer>
			</Dialog>
			<DialogSuccess></DialogSuccess>
			<DialogError></DialogError>
		</>
	);
}
