import type { Realm, AnyRealmObject } from 'realm';

export type ModelList<T extends AnyRealmObject> = {
  data: Realm.Results<T> | T[];
  loading: boolean;
  endReached: boolean;
  loadMore: (limit?: number) => Promise<void>;
};

export type ModelData<D extends AnyRealmObject, A extends unknown[] = []> = {
  data: D | null;
  loading: boolean;
  load: (...args: A) => Promise<void>;
};
