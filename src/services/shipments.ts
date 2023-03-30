import { Parcel, Shipment } from '../interfaces';

export function getShipmentsFromParcels(parcels: Parcel[]) {
	return parcels.reduce((shipments: Shipment[], parcel: Parcel) => {
		const { deliveryDate, itemsCount, pickupDate } = parcel;

		const shipmentDeliveryDate = shipments.find(
			(shipment) => shipment.deliveryDate === deliveryDate
		);
		if (!shipmentDeliveryDate) {
			return [
				...shipments,
				{ carriersCount: 1, deliveryDate, itemsCount, parcels: [parcel], pickupDate }
			];
		}

		const shipmentDeliveryDateRest = shipments.filter(
			(shipment) => shipment.deliveryDate !== deliveryDate
		);
		return [
			...shipmentDeliveryDateRest,
			{
				carriersCount: shipmentDeliveryDate.carriersCount + 1,
				deliveryDate,
				itemsCount: itemsCount + shipmentDeliveryDate.itemsCount,
				parcels: [...shipmentDeliveryDate.parcels, parcel],
				pickupDate
			}
		];
	}, []);
}
