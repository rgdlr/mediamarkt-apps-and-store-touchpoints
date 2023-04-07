import { useEffect, useState } from 'react';
import { Button, Dropdown, Items, Parcels, Shipments, Svg } from '../components';
import { Icon, Locale, Position, Shape, Step } from '../constants';
import { useFetch, useI18N } from '../hooks';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';
import { getShipmentsFromParcels } from '../services';

const languageDropdownOptions = [
	{ id: Locale.En, value: '🇬🇧 English' },
	{ id: Locale.Es, value: '🇪🇸 Español' },
	{ id: Locale.Fr, value: '🇫🇷 Français' }
];

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('mocks/carriers.json');
	const { data: items } = useFetch<Item[]>('mocks/items.json');
	const { data: parcels } = useFetch<Parcel[]>('mocks/parcels.json');

	const { locale, setLocale } = useI18N();

	const [step, setStep] = useState<Step>(Step.SHIPMENTS);
	const [shipments, setShipments] = useState<Shipment[]>([]);
	const [selectedShipmentDate, setSelectedShipmentDate] = useState<string>('');
	const [selectedParcelId, setSelectedParcelId] = useState<string>('');

	function setStepBack() {
		if (step === Step.PARCELS) {
			setSelectedShipmentDate('');
			setStep(Step.SHIPMENTS);
		}
		if (step === Step.ITEMS) {
			setSelectedParcelId('');
			setStep(Step.PARCELS);
		}
	}

	function getShipmentFromDate() {
		return shipments.find((shipment) => shipment.deliveryDate === selectedShipmentDate);
	}

	function getItemsByShipmentDateAndParcelId(): Item[] | undefined {
		const shipmentItemsIds = shipments
			.find((shipment) => shipment.deliveryDate === selectedShipmentDate)
			?.parcels.find((parcel) => parcel.id.$oid === selectedParcelId)
			?.items.map((item) => item.$oid);
		return items?.filter((item) => shipmentItemsIds?.includes(item.id.$oid));
	}

	useEffect(() => {
		setShipments(getShipmentsFromParcels(parcels ?? []));
	}, [parcels]);

	useEffect(() => {
		if (selectedShipmentDate) setStep(Step.PARCELS);
	}, [selectedShipmentDate]);

	useEffect(() => {
		if (selectedParcelId) setStep(Step.ITEMS);
	}, [selectedParcelId]);

	return (
		<>
			{step === Step.SHIPMENTS && (
				<Shipments
					carriers={carriers}
					parcels={parcels}
					shipments={shipments}
					onSelect={setSelectedShipmentDate}></Shipments>
			)}
			{step === Step.PARCELS && (
				<Parcels
					carriers={carriers}
					parcels={parcels}
					shipment={getShipmentFromDate()}
					onSelect={setSelectedParcelId}></Parcels>
			)}
			{step === Step.ITEMS && (
				<Items
					carrier={carriers?.at(0)}
					items={getItemsByShipmentDateAndParcelId()}
					parcel={parcels?.at(0)}></Items>
			)}
			<div
				style={{
					display: 'flex',
					position: 'absolute',
					right: '1.25rem',
					top: '1.25rem'
				}}>
				{step !== Step.SHIPMENTS && (
					<Button
						style={{
							background: '#fff8',
							boxShadow: 'none',
							color: 'var(--gray-400)'
						}}
						shape={Shape.CIRCLE}
						onClick={setStepBack}>
						<Svg icon={Icon.BACK}></Svg>
					</Button>
				)}
				<Dropdown
					defaultValue={locale}
					onSelectOption={setLocale}
					options={languageDropdownOptions}
					position={Position.RIGHT}></Dropdown>
			</div>
		</>
	);
}
