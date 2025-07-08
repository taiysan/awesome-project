import { memo, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@shared/hooks';
import { Text } from '@shared/ui';

type Props = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

export const ProductListItem = memo((props: Props) => {
  const { id, title, description, thumbnail } = props;
  const navigation = useNavigation();

  const onPressHandler = useCallback(() => {
    navigation.push('Details', { id });
  }, [navigation, id]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text type={'title'} numberOfLines={2}>
          {title}
        </Text>
        <Text type={'description'} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dae1e7',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .03)',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
