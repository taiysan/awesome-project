import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetailsScreen, ProductListScreen } from '@screens/product/ui';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={ProductListScreen} />
        <RootStack.Screen name="Details" component={ProductDetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
