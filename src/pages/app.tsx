import {
	Button,
	Dialog,
	DialogError,
	DialogSuccess,
	Form,
	Input,
	Parcels,
	Select
} from '../components';
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
					<Form>
						<Input label='ID'></Input>
						<Select label='Carrier ID'>
							<option value='A'>A</option>
							<option value='B'>B</option>
							<option value='C'>C</option>
						</Select>
					</Form>
				</div>
				<footer className='dialog__footer'>
					<Button>ADD</Button>
				</footer>
			</Dialog>
			<DialogSuccess open></DialogSuccess>
			<DialogError open></DialogError>
		</>
	);
}
