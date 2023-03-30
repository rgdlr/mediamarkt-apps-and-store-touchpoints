import { useEffect, useState } from 'react';
import { Button, Svg } from '../components';
import { Icon, Shape, Step } from '../constants';
import { useFetch } from '../hooks';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';
import { Items, Parcels, Shipments } from '.';
import { getShipmentsFromParcels } from '../services';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('carriers.json');
	const { data: items } = useFetch<Item[]>('items.json');
	const { data: parcels } = useFetch<Parcel[]>('parcels.json');

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
			{step !== Step.SHIPMENTS && (
				<Button
					style={{
						background: 'transparent',
						boxShadow: 'none',
						color: 'var(--gray-400)',
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
