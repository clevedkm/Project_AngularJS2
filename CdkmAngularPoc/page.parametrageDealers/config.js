'use strict';

angular.module('page.parametrageDealers')

.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('parametrageDealers', {
    	url: "/parametrageDealers",
    	templateUrl: 'page.parametrageDealers/view.html',
    	controller : "pageParametrageDealersController",
    	controllerAs : "pageParametrageDealersController"
    });
}]);


