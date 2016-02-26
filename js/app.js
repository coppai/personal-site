(function() {

    var app = angular.module('iansApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'js/app/views/home.html'
            })
            .when('/about', {
            	controller: 'AboutController',
            	templateUrl: 'js/app/views/about.html'
            })
            .when('/work', {
            	controller: 'WorkController',
            	templateUrl: 'js/app/views/work.html'
            })
            .when('/contact', {
            	controller: 'ContactController',
            	templateUrl: 'js/app/views/contact.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

    });

}());
