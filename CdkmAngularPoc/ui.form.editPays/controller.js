
angular.module('ui.form.editPays')

.controller('uiFormEditPaysController', ['$scope',
                                        '$location',
                                        '$http',
                                        function($scope,
                                                $location,
                                                $http) {
    
    $scope.init = function() {
        if($scope.pays.all == "1"){
        	$scope.showAll = true;
        }else{
        	$scope.showAll = false;
        }

        if($scope.pays.none == "1"){
        	$scope.showNone = true;
        }else{
        	$scope.showNone = false;
        }

        if($scope.pays.custom == "1"){
        	$scope.showCustom = true;
        }else{
        	$scope.showCustom = false;
        }
	};

	$scope.clickAll = function(){
		$scope.showAll = true;
		$scope.pays.all = "1"

		$scope.showNone = false;
		$scope.pays.none = "0"

		$scope.showCustom = false;
		$scope.pays.custom = "0"
	};

	$scope.clickNone = function(){
		$scope.showAll = false;
		$scope.pays.all = "0"

		$scope.showNone = true;
		$scope.pays.none = "1"

		$scope.showCustom = false;
		$scope.pays.custom = "0"
	};
	
	$scope.clickCustom = function(){
		$scope.showAll = false; 
		$scope.pays.all = "0"

		$scope.showNone = false;
		$scope.pays.none = "0"

		$scope.showCustom = true;
		$scope.pays.custom = "1"
	};

	$scope.goToEditPays = function(){
		 $location.path("/editPays");
	};

	$scope.init();
}]);
