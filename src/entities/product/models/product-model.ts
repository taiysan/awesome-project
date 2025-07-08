import { useCallback, useState } from 'react';
import { Realm, useObject, useQuery, useRealm } from '@realm/react';
import { getProductList } from '@entities/product/api';
import { type ModelList, type ModelData } from '@shared/types';
import { ProductSchema } from './product-schema';

export const useProductListModel = (): ModelList<ProductSchema> => {
  const realm = useRealm();
  const data = useQuery(ProductSchema);

  const [skip, setSkip] = useState(data.length);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);

  const loadMore = useCallback(
    async (limit = 10) => {
      setLoading(true);

      const list = await getProductList(skip, limit).finally(() => setLoading(false));
      const nextSkip = list.skip + list.limit;
      const nextEndReached = nextSkip >= list.total;

      realm.write(() => {
        for (let product of list.products) {
          realm.create(ProductSchema, ProductSchema.generate(product), Realm.UpdateMode.Modified);
        }
      });

      setSkip(nextEndReached ? list.total : nextSkip);
      setEndReached(nextEndReached);
    },
    [realm, skip],
  );

  // TODO: add refresh functionality due to unstable order

  return {
    data,
    loading,
    endReached,
    loadMore,
  };
};

export const useProductModel = (id: number): ModelData<ProductSchema, [number?]> => {
  const realm = useRealm();
  const data = useObject(ProductSchema, id);
  const products = useQuery(ProductSchema);

  const [loading, setLoading] = useState(false);

  const load = useCallback(
    async (count: number = 5) => {
      setLoading(true);

      if (data && data.recommendations.length < count) {
        // Getting random indices from product list
        const indices = new Set<number>();
        while (indices.size < Math.min(count, products.length)) {
          let index = Math.floor(Math.random() * products.length);
          if (products[index].id !== data.id) {
            indices.add(index);
          }
        }

        realm.write(() => {
          data.recommendations.splice(0);
          for (let index of indices) {
            data.recommendations.push(products[index]);
          }
        });
      }
    },
    [realm, data, products],
  );

  return {
    data,
    loading,
    load,
  };
};
