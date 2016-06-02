angular.module('page.editDealer')

.controller('pageEditDealerController', ['$cookies','$scope',
                                        '$location',
                                        '$http',
                                        function($cookies, $scope,
                                                $location,
                                                $http) {


    $scope.init = function() {
    	$scope.showDemand = false;
    	var obj = $cookies.get('dealerSelected');
    	$scope.dealerSelecetd = JSON.parse(obj);
    	initSwitchDemand();
    	initSwitchDecision();
	};


	$scope.selectDemand = function(){
		$scope.showDemand = !$scope.showDemand;
	};

	$scope.selectDecision = function(){
		$scope.showDecision = !$scope.showDecision;
	}
	

		initSwitchDemand = function(){
			if($scope.dealerSelecetd.customObject.demande.demandeStudy == "0" 
				&& $scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded=="0"){
				$scope.demand = false;
			}
			else if($scope.dealerSelecetd.customObject.demande.demandeStudy == "1" 
				&& $scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded=="1"){
				$scope.demand = true;
			}
			
			if($scope.dealerSelecetd.customObject.demande.demandeStudy=="0"){
				$scope.demandInStudy = false;
			}else{
				$scope.demandInStudy = true;
			}

			if($scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded=="0"){
				$scope.demandDocNeeded = false;
			}else{
				$scope.demandDocNeeded = true;
			}		
	};

	initSwitchDecision = function(){
			if($scope.dealerSelecetd.customObject.decision.demandRefusee == "0" 
				&& $scope.dealerSelecetd.customObject.decision.demandAcceptee=="0"
				&& $scope.dealerSelecetd.customObject.decision.demandAccepteeCond=="0"){
				$scope.decision = false;
			}
			else if($scope.dealerSelecetd.customObject.decision.demandRefusee == "1" 
				&& $scope.dealerSelecetd.customObject.decision.demandAcceptee=="1"
				&& $scope.dealerSelecetd.customObject.decision.demandAccepteeCond=="1"){
				$scope.decision = true;
			}
			
			if($scope.dealerSelecetd.customObject.decision.demandRefusee=="0"){
				$scope.demandRefusee = false;
			}else{
				$scope.demandRefusee = true;
			}

			if($scope.dealerSelecetd.customObject.decision.demandAcceptee=="0"){
				$scope.demandAcceptee = false;
			}else{
				$scope.demandAcceptee = true;
			}	

			if($scope.dealerSelecetd.customObject.decision.demandAccepteeCond=="0"){
				$scope.demandAccepteeCond = false;
			}else{
				$scope.demandAccepteeCond = true;
			}	
	};
	$scope.newValue = function(value) {
     console.log(value);
	}

    $scope.init();

    $scope.changeDemand = function() {
    	if($scope.demand == true){
    		$scope.demandInStudy = true;
    		$scope.demandDocNeeded = true;
    		$scope.dealerSelecetd.customObject.demande.demandeStudy = "1"
    		$scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded = "1"
    	}else{
    		$scope.demandInStudy = false;
    		$scope.demandDocNeeded = false;
    		$scope.dealerSelecetd.customObject.demande.demandeStudy = "0"
    		$scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded = "0"
    	}
  	};

  	$scope.changeDecision = function() {
    	if($scope.decision == true){
    		$scope.demandRefusee = true;
    		$scope.demandAcceptee = true;
    		$scope.demandAccepteeCond = true;
    		$scope.dealerSelecetd.customObject.decision.demandRefusee = "1"
    		$scope.dealerSelecetd.customObject.decision.demandAcceptee = "1"
    		$scope.dealerSelecetd.customObject.decision.demandAccepteeCond = "1"
    	}else{
    		$scope.demandRefusee = false;
    		$scope.demandAcceptee = false;
    		$scope.demandAccepteeCond = false;
    		$scope.dealerSelecetd.customObject.decision.demandRefusee = "0"
    		$scope.dealerSelecetd.customObject.decision.demandAcceptee = "0"
    		$scope.dealerSelecetd.customObject.decision.demandAccepteeCond = "0"
    	}
  	};

  	$scope.changeDis = function() {
    	if($scope.demandInStudy == true){
    		$scope.dealerSelecetd.customObject.demande.demandeStudy = "1"
    	}else{
    		$scope.dealerSelecetd.customObject.demande.demandeStudy = "0"
    	}

    	if($scope.demandInStudy == $scope.demandDocNeeded){
    		$scope.demand = $scope.demandInStudy;
    	}
  	};

  	$scope.changeDemandDocNeeded = function() {
    	if($scope.demandDocNeeded == true){
    		$scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded = "1"
    	}else{
    		$scope.dealerSelecetd.customObject.demande.demandeStudyDocNeeded = "0"
    	}

    	if($scope.demandInStudy == $scope.demandDocNeeded){
    		$scope.demand = $scope.demandInStudy;
    	}
  	};



  	$scope.changeDemandeRefusee = function() {
    	if($scope.demandRefusee == true){
    		$scope.dealerSelecetd.customObject.decision.demandRefusee = "1"
    	}else{
    		$scope.dealerSelecetd.customObject.decision.demandRefusee = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.changeDemandAcceptee = function() {
    	if($scope.demandAcceptee == true){
    		$scope.dealerSelecetd.customObject.decision.demandAcceptee = "1"
    	}else{
    		$scope.dealerSelecetd.customObject.decision.demandAcceptee = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.changeDemandAccepteeCond = function() {
    	if($scope.demandAccepteeCond == true){
    		$scope.dealerSelecetd.customObject.decision.demandAccepteeCond = "1"
    	}else{
    		$scope.dealerSelecetd.customObject.decision.demandAccepteeCond = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.goToParametragePays = function(){
  		//delete the object "paysSelected" from the session, to put the new object 
  		$cookies.remove('dealerSelected');

  		if($scope.demandInStudy == true && $scope.demandDocNeeded==true &&
  			$scope.demandRefusee == true && $scope.demandAcceptee==true && $scope.demandAccepteeCond==true){
  			$scope.dealerSelecetd.all = "1";
  			$scope.dealerSelecetd.none = "0";
  			$scope.dealerSelecetd.custom = "0";
  		} else if($scope.demandInStudy == false && $scope.demandDocNeeded == false &&
  			$scope.demandRefusee == false && $scope.demandAcceptee==false && $scope.demandAccepteeCond==false){
  			$scope.dealerSelecetd.all = "0";
  			$scope.dealerSelecetd.none = "1";
  			$scope.dealerSelecetd.custom = "0";
  		} else {
  			$scope.dealerSelecetd.all = "0";
  			$scope.dealerSelecetd.none = "0";
  			$scope.dealerSelecetd.custom = "1";
  		}
  		//Put the new object in the session
  		$cookies.putObject('dealerSelected', $scope.dealerSelecetd);


  		$location.path("/parametrageDealers");

  	};

  	$scope.clickAll = function(){
  		$scope.demand = true;
  		$scope.demandInStudy = true;
  		$scope.demandDocNeeded = true;

  		$scope.decision = true;
  		$scope.demandRefusee = true;
  		$scope.demandAcceptee = true;
  		$scope.demandAccepteeCond = true;  
  	
  		$scope.dealerSelecetd.all = "1";
  		$scope.dealerSelecetd.none = "0";
  		$scope.dealerSelecetd.custom = "0";		
  	};

  	$scope.clickNone = function(){
  		$scope.demand = false;
  	  	$scope.demandInStudy = false;
  	  	$scope.demandDocNeeded = false;
  	  	
  	  	$scope.decision = false;
  	  	$scope.demandRefusee = false;
  	  	$scope.demandAcceptee = false;
  		$scope.demandAccepteeCond = false;  
  	
  		$scope.dealerSelecetd.all = "1";
  		$scope.dealerSelecetd.none = "0";
  		$scope.dealerSelecetd.custom = "0";	
  	};

  	$scope.clickCustom = function(){

  	};

}]);
