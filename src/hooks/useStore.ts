import { useReducer } from 'react';
import { Carrier, Item, Parcel, Shipment } from '../interfaces';
import { getShipmentsFromParcels } from '../services';
import { useFetch } from './useFetch';

interface ReducerState {
	carriers: Carrier[];
	items: Item[];
	parcels: Parcel[];
	shipments: Shipment[];
}

const initialState: ReducerState = {
	carriers: [],
	items: [],
	parcels: [],
	shipments: []
};

const enum Actions {
	GET_CARRIERS = 'GET_CARRIERS',
	GET_ITEMS = 'GET_ITEMS',
	GET_PARCELS = 'GET_PARCELS',
	GET_SHIPMENTS = 'GET_SHIPMENTS',
	SET_CARRIERS = 'SET_CARRIERS',
	SET_ITEMS = 'SET_ITEMS',
	SET_PARCELS = 'SET_PARCELS',
	SET_SHIPMENTS = 'SET_SHIPMENTS'
}

type Action =
	| { type: Actions.GET_CARRIERS; payload: undefined }
	| { type: Actions.GET_ITEMS; payload: undefined }
	| { type: Actions.GET_PARCELS; payload: undefined }
	| { type: Actions.GET_SHIPMENTS; payload: undefined }
	| { type: Actions.SET_CARRIERS; payload: Carrier[] }
	| { type: Actions.SET_ITEMS; payload: Item[] }
	| { type: Actions.SET_PARCELS; payload: Parcel[] }
	| { type: Actions.SET_SHIPMENTS; payload: Shipment[] };

function reducer(state: ReducerState, action: Action): ReducerState {
	const { type, payload } = action;

	if (type === Actions.GET_CARRIERS) {
		const { data: carriers } = useFetch<Carrier[]>('carriers.json');
		return { ...state, carriers: carriers ?? state.carriers };
	}

	if (type === Actions.GET_ITEMS) {
		const { data: items } = useFetch<Item[]>('items.json');
		return { ...state, items: items ?? state.items };
	}

	if (type === Actions.GET_PARCELS) {
		const { data: parcels } = useFetch<Parcel[]>('parcels.json');
		return { ...state, parcels: parcels ?? state.parcels };
	}

	if (type === Actions.GET_SHIPMENTS) {
		return { ...state, shipments: getShipmentsFromParcels(state.parcels) };
	}

	if (type === Actions.SET_CARRIERS) {
		return { ...state, carriers: payload };
	}

	if (type === Actions.SET_ITEMS) {
		return { ...state, items: payload };
	}

	if (type === Actions.SET_PARCELS) {
		return { ...state, parcels: payload };
	}

	if (type === Actions.SET_SHIPMENTS) {
		return { ...state, shipments: payload };
	}

	return state;
}

interface Dispatchers {
	getCarriers(): void;
	getItems(): void;
	getParcels(): void;
	getShipments(): void;
	setCarriers(payload: Carrier[]): void;
	setItems(payload: Item[]): void;
	setParcels(payload: Parcel[]): void;
	setShipments(payload: Shipment[]): void;
}

export function useStore(): ReducerState & Dispatchers {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getCarriers = () => dispatch({ type: Actions.GET_CARRIERS, payload: undefined });

	const getItems = () => dispatch({ type: Actions.GET_ITEMS, payload: undefined });

	const getParcels = () => dispatch({ type: Actions.GET_PARCELS, payload: undefined });

	const getShipments = () => dispatch({ type: Actions.GET_SHIPMENTS, payload: undefined });

	const setCarriers = (payload: Carrier[]) => dispatch({ type: Actions.SET_CARRIERS, payload });

	const setItems = (payload: Item[]) => dispatch({ type: Actions.SET_ITEMS, payload });

	const setParcels = (payload: Parcel[]) => dispatch({ type: Actions.SET_PARCELS, payload });

	const setShipments = (payload: Shipment[]) => dispatch({ type: Actions.SET_SHIPMENTS, payload });

	return {
		...state,
		getCarriers,
		getItems,
		getParcels,
		getShipments,
		setCarriers,
		setItems,
		setParcels,
		setShipments
	};
}
