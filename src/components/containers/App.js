import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import configureStore from '../../../src/store';
import MapScreen from '../../screens/Map/Map';
import FindWeather from '../../screens/FindWeather/FindWeather';

const store = configureStore();

// Registaer Screen
Navigation.registerComponentWithRedux('map-screen.MapScreen', () => MapScreen, Provider, store);
Navigation.registerComponentWithRedux('find-weather.FindWeather', () => FindWeather, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
	// Start Screen
	Navigation.setRoot({
		root: {
			stack: {
				id: 'AppStack',
				children: [{
					component: {
						name: 'map-screen.MapScreen',
						options: {
							topBar: {
								title: {
									text: 'Find Weather'
								}
							}
						}
					}
				}]
			}
		}
	});
});

