import { useFetch } from "../hooks";
import { Carrier, Id } from "../interfaces";

export function getCarriers(): Carrier[] | undefined {
  const { data: carriers } = useFetch<Carrier[]>("src/mocks/carriers.json");
  return carriers;
}

export function getCarrier(id: Id): Carrier | undefined {
  const carriers = getCarriers();
  const carrier = carriers?.find((carrier) => carrier.id.$oid === id.$oid);
  return carrier;
}
