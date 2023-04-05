import { useEffect, useState } from 'react';
import { Button, Items, Parcels, Shipments, Svg } from '../components';
import { Icon, Locale, Shape, Step } from '../constants';
import { useFetch, useI18N } from '../hooks';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';
import { getShipmentsFromParcels } from '../services';

export function App(): JSX.Element {
	const { data: carriers } = useFetch<Carrier[]>('carriers.json');
	const { data: items } = useFetch<Item[]>('items.json');
	const { data: parcels } = useFetch<Parcel[]>('parcels.json');

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
				<Button
					style={{
						background: '#fff8',
						boxShadow: 'none',
						color: 'var(--gray-400)'
					}}
					shape={Shape.CIRCLE}
					onClick={() => setLocale && setLocale(locale === Locale.En ? Locale.Es : Locale.En)}>
					<svg
						fill='currentColor'
						height='32'
						width='32'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 640 512'>
						<path d='M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z' />
					</svg>
				</Button>
			</div>
		</>
	);
}
