angular.module('ui.form.parametragePays')

.directive('uiFormParametragePays', [function() {
	return {
		restrict : 'AE',
		templateUrl : 'ui.form.parametragePays/view.html',
		controller : 'uiFormParametragePaysController',
		controllerAs : 'uiFormParametragePaysController',
		replace: true,
		scope : {
			pays : '='
		}
	}
}]);