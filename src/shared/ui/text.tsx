import { memo } from 'react';
import { Text as NativeText, StyleSheet, type TextProps } from 'react-native';

type Props = TextProps & {
  type: 'title' | 'description' | undefined;
};

export const Text = memo((props: Props) => {
  const { type, ...restProps } = props;
  const style = type && styles[type];

  return <NativeText style={[styles.default, style]} {...restProps} />;
});

const styles = StyleSheet.create({
  default: {},
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
});
