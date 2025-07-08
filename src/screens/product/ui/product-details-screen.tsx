import { StyleSheet, View } from 'react-native';
import { useRoute } from '@shared/hooks';
import { useProductModel } from '@entities/product/models';
import { ProductCard } from '@entities/product/ui';
import { ProductRecommendationsList } from '@features/product/ui';
import { useEffect } from 'react';

export type ProductDetailsScreenParams = {
  id: number;
};

export const ProductDetailsScreen = () => {
  const { params } = useRoute<'Details'>();
  const { data, load } = useProductModel(params.id);

  useEffect(() => {
    load(5);
  }, [load]);

  return (
    data && (
      <View style={styles.content}>
        <ProductCard title={data.title} description={data.description} images={data.images} />
        <ProductRecommendationsList products={data.recommendations} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
