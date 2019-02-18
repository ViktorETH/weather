import axios from 'axios';

const service = axios.create({
	baseURL: 'https://api.weatherbit.io/v2.0/',
	timeout: 5000
});

export default service;
