/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import basicapp from './src/component/basicapp';



AppRegistry.registerComponent(appName, () => basicapp);
