angular.module('ui.form.editPays')

.directive('uiFormEditPays', [function() {
	return {
		restrict : 'AE',
		templateUrl : 'ui.form.editPaysPays/view.html',
		controller : 'uiFormEditPaysController',
		controllerAs : 'uiFormEditPaysController',
		replace: true,
		scope : {
			pays : '='
		}
	}
}]);