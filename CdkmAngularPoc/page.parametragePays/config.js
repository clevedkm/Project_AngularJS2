'use strict';

angular.module('page.parametragePays')

.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('parametragePays', {
    	url: "/parametragePays",
    	templateUrl: 'page.parametragePays/view.html',
    	controller : "pageParametragePaysController",
    	controllerAs : "pageParametragePaysController"
    });
}]);


