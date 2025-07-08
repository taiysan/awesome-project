import { memo, useCallback } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator, type ListRenderItem } from 'react-native';
import { useProductListModel, type ProductSchema } from '@entities/product/models';
import { ProductListItem } from '@entities/product/ui';

export const ProductList = memo(() => {
  const { data, loading, endReached, loadMore } = useProductListModel();

  const ListFooterComponent = loading ? <ActivityIndicator style={styles.indicator} /> : null;
  const keyExtractor = useCallback((item: ProductSchema) => item.id.toString(), []);
  const renderItem: ListRenderItem<ProductSchema> = useCallback(
    ({ item }) => (
      <ProductListItem id={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail} />
    ),
    [],
  );

  const onEndReached = useCallback(async () => {
    if (!loading && !endReached) {
      await loadMore();
    }
  }, [loading, endReached, loadMore]);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 40,
    gap: 10,
  },
  indicator: {
    margin: 20,
  },
});
