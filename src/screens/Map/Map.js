import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {connect} from 'react-redux';
import MapView from 'react-native-maps';
import {Platform, StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import {getWeatherInfoByCity} from '../../store/actions/weather'

class MapScreen extends Component {

	state = {
		focusedLocation: {
			latitude: 50.45466,
			longitude: 30.5238,
			latitudeDelta: 0.0122,
			longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
		}
	};

	onRegionChange = (event) => {
		const { latitude, longitude } = event.nativeEvent.coordinate;
		this.setState({
			focusedLocation: {
				latitude: Number(latitude),
				longitude: Number(longitude),
				latitudeDelta: 0.0122,
				longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
			}
		});
		Navigation.push(this.props.componentId, {
			component: {
				name: 'find-weather.FindWeather',
				passProps: {
					data: this.state.focusedLocation
				},
			}
		})
	};

	render () {
		return (
			<View style={styles.container}>
					<MapView
						style={styles.map}
						initialRegion={this.state.focusedLocation}
						zoomControlEnabled={true}
						onLongPress={this.onRegionChange}
						minZoomLevel={7}/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		weather: state.weather
	}
};

const mapDispatchToProps = {
	getWeatherInfoByCity
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	map: {
		flex: 1,
		width: '100%',
		height: 500
	}
});
