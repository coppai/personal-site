/*
	factory for fetching location information
	for current user
*/
(function() {
    var locationFactory = function($http) {
        var factory = {};
        factory.getCurrentLocation = function() {
            return $http.get('http://ipinfo.io/');
        }
        return factory;
    }

    locationFactory.$inject = ['$http'];

    angular.module('weatherApp')
        .factory('locationFactory', locationFactory);
}());
