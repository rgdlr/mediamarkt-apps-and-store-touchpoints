import { Parcel, Shipment } from '../interfaces';

export function getShipmentsFromParcels(parcels: Parcel[]) {
	return parcels.reduce((shipments: Shipment[], parcel: Parcel) => {
		const { deliveryDate } = parcel;

		const shipmentDeliveryDate = shipments.find(
			(shipment) => shipment.deliveryDate === deliveryDate
		);
		if (!shipmentDeliveryDate) {
			return [...shipments, { deliveryDate, parcels: [parcel] }];
		}

		const shipmentDeliveryDateRest = shipments.filter(
			(shipment) => shipment.deliveryDate !== deliveryDate
		);
		return [
			...shipmentDeliveryDateRest,
			{ deliveryDate, parcels: [...shipmentDeliveryDate.parcels, parcel] }
		];
	}, []);
}
