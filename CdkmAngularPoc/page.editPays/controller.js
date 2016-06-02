angular.module('page.editPays')

.controller('pageEditPaysController', ['$cookies','$scope',
                                        '$location',
                                        '$http',
                                        function($cookies, $scope,
                                                $location,
                                                $http) {


    $scope.init = function() {
    	$scope.showDemand = false;
    	var obj = $cookies.get('paysSelected');
    	$scope.paysSelecetd = JSON.parse(obj);
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
			if($scope.paysSelecetd.customObject.demande.demandeStudy == "0" 
				&& $scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded=="0"){
				$scope.demand = false;
			}
			else if($scope.paysSelecetd.customObject.demande.demandeStudy == "1" 
				&& $scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded=="1"){
				$scope.demand = true;
			}
			
			if($scope.paysSelecetd.customObject.demande.demandeStudy=="0"){
				$scope.demandInStudy = false;
			}else{
				$scope.demandInStudy = true;
			}

			if($scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded=="0"){
				$scope.demandDocNeeded = false;
			}else{
				$scope.demandDocNeeded = true;
			}		
	};

	initSwitchDecision = function(){
			if($scope.paysSelecetd.customObject.decision.demandRefusee == "0" 
				&& $scope.paysSelecetd.customObject.decision.demandAcceptee=="0"
				&& $scope.paysSelecetd.customObject.decision.demandAccepteeCond=="0"){
				$scope.decision = false;
			}
			else if($scope.paysSelecetd.customObject.decision.demandRefusee == "1" 
				&& $scope.paysSelecetd.customObject.decision.demandAcceptee=="1"
				&& $scope.paysSelecetd.customObject.decision.demandAccepteeCond=="1"){
				$scope.decision = true;
			}
			
			if($scope.paysSelecetd.customObject.decision.demandRefusee=="0"){
				$scope.demandRefusee = false;
			}else{
				$scope.demandRefusee = true;
			}

			if($scope.paysSelecetd.customObject.decision.demandAcceptee=="0"){
				$scope.demandAcceptee = false;
			}else{
				$scope.demandAcceptee = true;
			}	

			if($scope.paysSelecetd.customObject.decision.demandAccepteeCond=="0"){
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
    		$scope.paysSelecetd.customObject.demande.demandeStudy = "1"
    		$scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded = "1"
    	}else{
    		$scope.demandInStudy = false;
    		$scope.demandDocNeeded = false;
    		$scope.paysSelecetd.customObject.demande.demandeStudy = "0"
    		$scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded = "0"
    	}
  	};

  	$scope.changeDecision = function() {
    	if($scope.decision == true){
    		$scope.demandRefusee = true;
    		$scope.demandAcceptee = true;
    		$scope.demandAccepteeCond = true;
    		$scope.paysSelecetd.customObject.decision.demandRefusee = "1"
    		$scope.paysSelecetd.customObject.decision.demandAcceptee = "1"
    		$scope.paysSelecetd.customObject.decision.demandAccepteeCond = "1"
    	}else{
    		$scope.demandRefusee = false;
    		$scope.demandAcceptee = false;
    		$scope.demandAccepteeCond = false;
    		$scope.paysSelecetd.customObject.decision.demandRefusee = "0"
    		$scope.paysSelecetd.customObject.decision.demandAcceptee = "0"
    		$scope.paysSelecetd.customObject.decision.demandAccepteeCond = "0"
    	}
  	};

  	$scope.changeDis = function() {
    	if($scope.demandInStudy == true){
    		$scope.paysSelecetd.customObject.demande.demandeStudy = "1"
    	}else{
    		$scope.paysSelecetd.customObject.demande.demandeStudy = "0"
    	}

    	if($scope.demandInStudy == $scope.demandDocNeeded){
    		$scope.demand = $scope.demandInStudy;
    	}
  	};

  	$scope.changeDemandDocNeeded = function() {
    	if($scope.demandDocNeeded == true){
    		$scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded = "1"
    	}else{
    		$scope.paysSelecetd.customObject.demande.demandeStudyDocNeeded = "0"
    	}

    	if($scope.demandInStudy == $scope.demandDocNeeded){
    		$scope.demand = $scope.demandInStudy;
    	}
  	};



  	$scope.changeDemandeRefusee = function() {
    	if($scope.demandRefusee == true){
    		$scope.paysSelecetd.customObject.decision.demandRefusee = "1"
    	}else{
    		$scope.paysSelecetd.customObject.decision.demandRefusee = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.changeDemandAcceptee = function() {
    	if($scope.demandAcceptee == true){
    		$scope.paysSelecetd.customObject.decision.demandAcceptee = "1"
    	}else{
    		$scope.paysSelecetd.customObject.decision.demandAcceptee = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.changeDemandAccepteeCond = function() {
    	if($scope.demandAccepteeCond == true){
    		$scope.paysSelecetd.customObject.decision.demandAccepteeCond = "1"
    	}else{
    		$scope.paysSelecetd.customObject.decision.demandAccepteeCond = "0"
    	}

    	if($scope.demandRefusee == $scope.demandAcceptee && $scope.demandRefusee == $scope.demandAccepteeCond){
    		$scope.decision = $scope.demandRefusee;
    	}
  	};

  	$scope.goToParametragePays = function(){
  		//delete the object "paysSelected" from the session, to put the new object 
  		$cookies.remove('paysSelected');

  		if($scope.demandInStudy == true && $scope.demandDocNeeded==true &&
  			$scope.demandRefusee == true && $scope.demandAcceptee==true && $scope.demandAccepteeCond==true){
  			$scope.paysSelecetd.all = "1";
  			$scope.paysSelecetd.none = "0";
  			$scope.paysSelecetd.custom = "0";
  		} else if($scope.demandInStudy == false && $scope.demandDocNeeded == false &&
  			$scope.demandRefusee == false && $scope.demandAcceptee==false && $scope.demandAccepteeCond==false){
  			$scope.paysSelecetd.all = "0";
  			$scope.paysSelecetd.none = "1";
  			$scope.paysSelecetd.custom = "0";
  		} else {
  			$scope.paysSelecetd.all = "0";
  			$scope.paysSelecetd.none = "0";
  			$scope.paysSelecetd.custom = "1";
  		}
  		//Put the new object in the session
  		$cookies.putObject('paysSelected', $scope.paysSelecetd);


  		$location.path("/parametragePays");

  	};

  	$scope.clickAll = function(){
  		$scope.demand = true;
  		$scope.demandInStudy = true;
  		$scope.demandDocNeeded = true;

  		$scope.decision = true;
  		$scope.demandRefusee = true;
  		$scope.demandAcceptee = true;
  		$scope.demandAccepteeCond = true;  
  	
  		$scope.paysSelecetd.all = "1";
  		$scope.paysSelecetd.none = "0";
  		$scope.paysSelecetd.custom = "0";		
  	};

  	$scope.clickNone = function(){
  		$scope.demand = false;
  	  	$scope.demandInStudy = false;
  	  	$scope.demandDocNeeded = false;
  	  	
  	  	$scope.decision = false;
  	  	$scope.demandRefusee = false;
  	  	$scope.demandAcceptee = false;
  		$scope.demandAccepteeCond = false;  
  	
  		$scope.paysSelecetd.all = "1";
  		$scope.paysSelecetd.none = "0";
  		$scope.paysSelecetd.custom = "0";	
  	};

  	$scope.clickCustom = function(){

  	};

}]);
