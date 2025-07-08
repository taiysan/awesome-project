import { memo, useCallback } from 'react';
import { FlatList, StyleSheet, View, type ListRenderItem } from 'react-native';
import { type ProductSchema } from '@entities/product/models';
import { ProductListItem } from '@entities/product/ui';

type Props = {
  products: Realm.List<ProductSchema>;
};

export const ProductRecommendationsList = memo((props: Props) => {
  const { products } = props;

  const keyExtractor = useCallback((item: ProductSchema) => item.id.toString(), []);
  const renderItem: ListRenderItem<ProductSchema> = useCallback(
    ({ item }) => (
      <ProductListItem id={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 40,
    gap: 10,
  },
});
