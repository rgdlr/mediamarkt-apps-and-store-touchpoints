import { useEffect, useState } from 'react';
import { Button, Items, Parcels, Shipments, Svg } from '../components';
import { Icon, Shape } from '../constants';
import { useFetch } from '../hooks';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('src/mocks/carriers.json');
	const { data: items } = useFetch<Item[]>('src/mocks/items.json');
	const { data: parcels } = useFetch<Parcel[]>('src/mocks/parcels.json');

	const [step, setStep] = useState<'shipments' | 'parcels' | 'items'>('shipments');
	const [shipments, setShipments] = useState<Shipment[]>([]);
	const [shipmentId, setShipmentId] = useState<string>();
	const [parcelId, setParcelId] = useState<string>();

	function getItems(): Item[] | undefined {
		const shipmentItemsIds = shipments
			.find((shipment) => shipment.deliveryDate === shipmentId)
			?.parcels.find((parcel) => parcel.id.$oid === parcelId)
			?.items.map((item) => item.$oid);
		return items?.filter((item) => shipmentItemsIds?.includes(item.id.$oid));
	}

	function goBack() {
		if (step === 'parcels') setStep('shipments');
		if (step === 'items') setStep('parcels');
	}

	useEffect(() => {
		const shipments = parcels?.reduce((shipments: Shipment[], parcel: Parcel) => {
			const { deliveryDate } = parcel;
			const shipmentDeliveryDate = shipments.find(
				(shipment) => shipment.deliveryDate === deliveryDate
			);
			const shipmentDeliveryDateRest = shipments.filter(
				(shipment) => shipment.deliveryDate !== deliveryDate
			);
			if (!shipmentDeliveryDate) {
				return [...shipments, { deliveryDate, parcels: [parcel] }];
			} else {
				return [
					...shipmentDeliveryDateRest,
					{ deliveryDate, parcels: [...shipmentDeliveryDate.parcels, parcel] }
				];
			}
		}, []);
		if (shipments) setShipments(shipments);
	}, [parcels]);

	useEffect(() => {
		if (shipmentId) {
			setStep('parcels');
		}
	}, [shipmentId]);

	useEffect(() => {
		if (parcelId) {
			setStep('items');
		}
	}, [parcelId]);

	return (
		<>
			{step === 'shipments' && (
				<Shipments
					carriers={carriers}
					parcels={parcels}
					shipments={shipments}
					onSelect={(id) => setShipmentId(id)}></Shipments>
			)}
			{step === 'parcels' && (
				<Parcels
					carriers={carriers}
					parcels={parcels}
					shipment={shipments.find((shipment) => shipment.deliveryDate === shipmentId)}
					onSelect={(id) => setParcelId(id)}></Parcels>
			)}
			{step === 'items' && (
				<Items carrier={carriers?.shift()} items={getItems()} parcel={parcels?.shift()}></Items>
			)}
			{step !== 'shipments' && (
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
					onClick={goBack}>
					<Svg icon={Icon.BACK}></Svg>
				</Button>
			)}
		</>
	);
}
