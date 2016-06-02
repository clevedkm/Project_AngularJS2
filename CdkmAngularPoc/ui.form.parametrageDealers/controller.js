
angular.module('ui.form.parametrageDealers')

.controller('uiFormParametrageDealersController', ['$cookies','$rootScope','$scope',
                                        '$location',
                                        '$http',
                                        function($cookies, $rootScope, $scope,
                                                $location,
                                                $http) {
    
   $scope.init = function() {
        if($scope.dealer.all == "1"){
        	$scope.showAll = true;
        }else{
        	$scope.showAll = false;
        }

        if($scope.dealer.none == "1"){
        	$scope.showNone = true;
        }else{
        	$scope.showNone = false;
        }

        if($scope.dealer.custom == "1"){
        	$scope.showCustom = true;
        }else{
        	$scope.showCustom = false;
        }
	};

	$scope.clickAll = function(){
		$scope.showAll = true;
		$scope.dealer.all = "1"

		$scope.showNone = false;
		$scope.dealer.none = "0"

		$scope.showCustom = false;
		$scope.dealer.custom = "0"
	};

	$scope.clickNone = function(){
		$scope.showAll = false;
		$scope.dealer.all = "0"

		$scope.showNone = true;
		$scope.dealer.none = "1"

		$scope.showCustom = false;
		$scope.dealer.custom = "0"
	};
	
	$scope.clickCustom = function(){
		$scope.showAll = false; 
		$scope.dealer.all = "0"

		$scope.showNone = false;
		$scope.dealer.none = "0"

		$scope.showCustom = true;
		$scope.dealer.custom = "1";
	};

	$scope.goToEditDealer = function(){
		// $cookies.putObject('dealerSelected', $scope.dealer.customObject.demande);
		$cookies.putObject('dealerSelected', $scope.dealer);
		$location.path("/editDealer");

	};

	$scope.init();
}]);
