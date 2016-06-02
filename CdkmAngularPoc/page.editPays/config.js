'use strict';

angular.module('page.editPays')

.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('editPays', {
    	url: "/editPays",
    	templateUrl: 'page.editPays/view.html',
    	controller : "pageEditPaysController",
    	controllerAs : "pageEditPaysController"
    });
}]);


