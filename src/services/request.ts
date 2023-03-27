import { useFetch } from "../hooks";

export type Predicate<Type> = (this: void, value: Type, index: number, obj: Type[]) => value is Type;

export function request<Type>(url: string) {
  return {
    getAll: function (): Type[] | undefined {
      const { data } = useFetch<Type[]>(url);
      return data;
    },
    get: function (predicate: Predicate<Type>): Type | undefined {
      const data = this.getAll();
      const item = data?.find(predicate);
      return item;
    },
  };
}
