import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {getWeatherInfoByCity, getWeatherInfo} from "../../store/actions/weather";
import {connect} from "react-redux";

class FindWeather extends Component {

	state = {
		city: '',
	};

	componentDidMount() {
		const {latitude, longitude} = this.props.data;
		this.props.getWeatherInfo(latitude, longitude)
	}

	getWeatherByCity = (city) => {
		this.props.getWeatherInfoByCity(city)
	};

	render () {
		const {city} = this.state;
		return (
			<View style={styles.container}>
				{!this.props.weather.loading
					?
					<View>
						<View style={styles.searchWrapper}>
							<TextInput
								style={styles.searchInput}
								ref={'textInput'}
								onChangeText={(text) => this.setState({city: text})}
								value={this.state.city}/>
							<Button style={styles.button} title={'Search'} onPress={() => this.getWeatherByCity(city)}/>
						</View>
						<View>
							<Text style={styles.title}>{this.props.weather.weather['city_name']}</Text>
						</View>
						<View>
							<Text style={styles.title}>{`${this.props.weather.weather['temp']}°C`}</Text>
						</View>
					</View>
					:
					<View>
						<Text>Wait...</Text>
					</View>
				}
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
	getWeatherInfoByCity,
	getWeatherInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(FindWeather);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3D8AD8'
	},
	searchWrapper: {
		flexDirection: 'row',
		alignSelf: 'center',
		height: 40,
		alignItems: 'center',
		marginTop: 20
	},
	title: {
		fontSize: 70,
		alignSelf: 'center',
		color: '#fff'
	},
	searchInput: {
		height: '100%',
		borderColor: 'gray',
		borderWidth: 1,
		width: '70%',
		backgroundColor: '#fff',
		paddingLeft: 20
	},
	button: {
		height: '100%',
	}
});
