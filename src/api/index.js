import service from '../utils/request';

export const getWeatherByCoordinates = (lat, lon) => {
	return service({
		url: `current`,
		method: 'get',
		params: {
			lat,
			lon,
			key: '6633e77af97e4bc682290b55a00d4cc2'
		}
	})
};

export const getWeatherByCity = (city) => {
	return service({
		url: `current`,
		method: 'get',
		params: {
			city: city,
			key: '6633e77af97e4bc682290b55a00d4cc2'
		}
	})
};
