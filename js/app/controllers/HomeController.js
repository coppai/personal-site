(function(){

	var HomeController = function($scope, $log){
		function init(){

		}
		init();
	}

	HomeController.$inject = ['$scope', '$log'];

	angular.module('iansApp')
		.controller('HomeController', HomeController);

}())