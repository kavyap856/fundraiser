import axios from 'axios';

const BASE_URL = 'http://52.41.54.41:3001/';
axios.interceptors.request.use((config) => {
	const userDetails = JSON.parse(localStorage.getItem('AuthCode'));
	if (userDetails) {
		config.headers['Auth'] = userDetails;
		return config;
	}
	else { return config; }
});

export function postCall(url, body) {
	return axios.post(BASE_URL + url, body);
}
export function getCall(url, params = null) {
	return axios.get(BASE_URL + url, { params: params });
}
export function putCall(url,body)
{
	return axios.put(BASE_URL +url,body);
}
