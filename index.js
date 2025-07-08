import { AppRegistry } from 'react-native';
import { App } from './src/app';
import { Config } from './src/shared/config';

AppRegistry.registerComponent(Config.app.name, () => App);
