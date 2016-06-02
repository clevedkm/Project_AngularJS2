'use strict';

angular.module('page.editDealer')

.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('editDealer', {
    	url: "/editDealer",
    	templateUrl: 'page.editDealer/view.html',
    	controller : "pageEditDealerController",
    	controllerAs : "pageEditDealerController"
    });
}]);


