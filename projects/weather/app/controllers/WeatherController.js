// http://openweathermap.org/img/w/10d.png
(function() {
    var WeatherController = function($scope, weatherFactory, locationFactory) {

        $scope.place = null;

        // only get weather once user has selected object
        // what if user's city is not found and they end up typing it?
        // i put force selection to true but this isn't ideal
        $scope.$watch('place', function() {
            if ($scope.place !== null && typeof $scope.place === 'object') {

                var addressComp = $scope.place.address_components;

                $scope.location = addressComp[0]['long_name'];

                $scope.getWeather($scope.location + ", " + addressComp[1]['long_name']);

            }
        });

        locationFactory.getCurrentLocation()
            .success(function(data) {
                $scope.location = data.city;
                $scope.getWeather($scope.location);

            })
            .error(function(data, status, header, config) {
                console.log('error');
            })


        $scope.getWeather = function(location) {

            weatherFactory.getCurrentWeather(location)
                .success(function(data) {

                    $scope.fahrenheit = weatherFactory.kelvinToFahrenheit(data.main.temp);
                    $scope.description = data.weather[0].description;

                })
                .error(function(data, status, header, config) {
                    console.log(data);
                })

        }


    }




    WeatherController.$inject = ['$scope', 'weatherFactory', 'locationFactory'];

    angular.module('weatherApp')
        .controller('WeatherController', WeatherController);

}())
