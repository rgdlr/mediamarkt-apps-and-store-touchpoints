import { useEffect, useState } from 'react';
import { Button, Items, Parcels, Shipments, Svg } from '../components';
import { Icon, Shape, Step } from '../constants';
import { useFetch } from '../hooks';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';
import { getShipmentsFromParcels } from '../services/shipments';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('src/mocks/carriers.json');
	const { data: items } = useFetch<Item[]>('src/mocks/items.json');
	const { data: parcels } = useFetch<Parcel[]>('src/mocks/parcels.json');

	const [step, setStep] = useState<Step>(Step.SHIPMENTS);
	const [shipments, setShipments] = useState<Shipment[]>([]);
	const [selectedShipmentDate, setSelectedShipmentDate] = useState<string>('');
	const [selectedParcelId, setSelectedParcelId] = useState<string>('');

	function setStepBack() {
		if (step === Step.PARCELS) setStep(Step.SHIPMENTS);
		if (step === Step.ITEMS) setStep(Step.PARCELS);
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
					carrier={carriers?.shift()}
					items={getItemsByShipmentDateAndParcelId()}
					parcel={parcels?.shift()}></Items>
			)}
			{step !== Step.SHIPMENTS && (
				<Button
					style={{
						background: 'transparent',
						boxShadow: 'none',
						color: 'var(--gray-100)',
						position: 'absolute',
						right: '1.25rem',
						top: '1.25rem'
					}}
					shape={Shape.CIRCLE}
					onClick={setStepBack}>
					<Svg icon={Icon.BACK}></Svg>
				</Button>
			)}
		</>
	);
}
