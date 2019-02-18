import { getWeatherByCoordinates, getWeatherByCity } from '../../api';
import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../constantsTypes';

export function getWeatherInfo (lat, lon) {
	return dispatch => {
		dispatch({
			type: FETCH_WEATHER_START
		});
		getWeatherByCoordinates(lat, lon)
			.then(
				response => {
					dispatch({
						type: FETCH_WEATHER_SUCCESS,
						payload: response.data.data[0]
					})
				}
			)
			.catch(error => {
				dispatch({
					type: FETCH_WEATHER_ERROR,
					error: true,
					payload: error.response
				})
			});
	}
}

export function getWeatherInfoByCity (city) {
	return dispatch => {
		dispatch({
			type: FETCH_WEATHER_START
		});
		getWeatherByCity(city)
			.then(
				response => {
					dispatch({
						type: FETCH_WEATHER_SUCCESS,
						payload: response.data.data[0]
					})
				}
			)
			.catch(error => {
				dispatch({
					type: FETCH_WEATHER_ERROR,
					error: true,
					payload: error.response
				})
			});
	}
}
