// class WeatherApi {
// 	BASE_URL = 'http://api.weatherstack.com/current';
// 	API_KEY = '5017834a08316be9d1d802e71ee54e10';
// 	weatherSearch(term, params) {
// 		axios
// 			.get(this.BASE_URL, {
// 				params: {
// 					access_key: this.API_KEY,
// 					query: term,
// 					units: 'f',
// 					...params,
// 				},
// 			})
// 			.then(this.handleResponse)
// 			.catch(this.handleError);
// 	}
// 	handleResponse(response) {
// 		console.log('got a response', response);
// 		const event = new CustomEvent('got-weather', {
// 			detail: response,
// 		});
// 		document.querySelector('body').dispatchEvent(event);
// 	}
// }
"use strict";
//# sourceMappingURL=weather-api.js.map
