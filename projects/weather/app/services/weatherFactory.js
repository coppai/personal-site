/*
	factory for getting weather information from openweather
*/
(function(){
	var weatherFactory = function($http) {
		var factory = {
			apiKey: 'd4a8c3d32a6bdc0b2af43aeef1aa78ef',
			baseUrl: ''
		};

		factory.getCurrentWeather = function(location){
			var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + this.apiKey;
			return $http.get(url);
		}

		factory.kelvinToFahrenheit = function(k){
			//ºF =(K - 273.15)* 1.8000 + 32.00
			return Math.round((k - 273.15) * 1.800 + 32);
		}

		return factory;
	}

	weatherFactory.$inject = ['$http'];

	angular.module('weatherApp')
		.factory('weatherFactory', weatherFactory);
}());