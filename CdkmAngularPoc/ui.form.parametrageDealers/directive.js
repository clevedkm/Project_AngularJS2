angular.module('ui.form.parametrageDealers')

.directive('uiFormParametrageDealer', [function() {
	return {
		restrict : 'AE',
		templateUrl : 'ui.form.parametrageDealers/view.html',
		controller : 'uiFormParametrageDealersController',
		controllerAs : 'uiFormParametrageDealersController',
		replace: true,
		scope : {
			dealer : '='
		}
	}
}]);