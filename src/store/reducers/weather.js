import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../constantsTypes';

const initialState = {
	loading: false,
	error: false,
	weather: {}
};

export const weatherReducer = (state = initialState, action) => {
	switch (action.type){
		case FETCH_WEATHER_START:
			return {
				...state,
				loading: true,
				error: false,
			};
		case FETCH_WEATHER_SUCCESS:
			return {
				...state,
				loading: false,
				weather: action.payload
			};
		case FETCH_WEATHER_ERROR:
			return {
				...state,
				error: action.payload
			};
		default: return state;
	}
};

