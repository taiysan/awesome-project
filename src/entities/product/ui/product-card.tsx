import { StyleSheet, View, type ImageSourcePropType } from 'react-native';
import { Text, ImageHorizontalList } from '@shared/ui';
import { memo } from 'react';

type Props = {
  title: string;
  description: string;
  images: string[];
};

export const ProductCard = memo((props: Props) => {
  const { title, description, images } = props;
  const imageSources: ImageSourcePropType = images.map(uri => ({ uri }));

  return (
    <View style={styles.container}>
      <ImageHorizontalList sources={imageSources} />
      <View style={styles.contentContainer}>
        <Text type={'title'}>{title}</Text>
        <Text type={'description'}>{description}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    flexDirection: 'column',
    padding: 20,
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
