import {
  useNavigation as useNativeNavigation,
  useRoute as useNativeRoute,
  type RouteProp,
} from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useNavigation = useNativeNavigation<NativeStackNavigationProp<RootStackParamList>>;

export const useRoute = <RouteName extends keyof RootStackParamList>() => {
  return useNativeRoute<RouteProp<RootStackParamList, RouteName>>();
};
