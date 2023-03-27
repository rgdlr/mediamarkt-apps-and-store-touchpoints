import { useFetch } from "../hooks";
import { Id, Parcel } from "../interfaces";

export function getParcels(): Parcel[] | undefined {
  const { data: parcels } = useFetch<Parcel[]>("src/mocks/parcels.json");
  return parcels;
}

export function getParcel(id: Id): Parcel | undefined {
  const parcels = getParcels();
  const parcel = parcels?.find((parcel) => parcel.id.$oid === id.$oid);
  return parcel;
}
