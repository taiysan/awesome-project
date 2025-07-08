import { memo } from 'react';
import { Image, StyleSheet, View, type StyleProp, type ImageSourcePropType, type ViewStyle } from 'react-native';

type Props = {
  sources: ImageSourcePropType[];
  style?: StyleProp<ViewStyle>;
};

export const ImageHorizontalList = memo((props: Props) => {
  const { sources, style } = props;

  // TODO: add horizontal list of images
  const mock = sources.slice(0, 1);

  return (
    <View style={[styles.container, style]}>
      {mock.map((source, key) => (
        <Image key={key} resizeMode="contain" source={source} style={styles.image} />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#d2d2d2',
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
  },
  image: {
    height: 298,
    backgroundColor: '#f5f5f5',
  },
});
