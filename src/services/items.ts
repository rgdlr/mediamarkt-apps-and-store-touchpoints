import { useFetch } from "../hooks";
import { Item, Id } from "../interfaces";

export function getItems(): Item[] | undefined {
  const { data: items } = useFetch<Item[]>("src/mocks/items.json");
  return items;
}

export function getItem(id: Id): Item | undefined {
  const items = getItems();
  const item = items?.find((item) => item.id.$oid === id.$oid);
  return item;
}
