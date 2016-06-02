angular.module('page.parametrageDealers')

.controller('pageParametrageDealersController', ['$scope',
                                        '$cookies',
                                        '$location',
                                        '$http',
                                        function($scope,
                                                $cookies,
                                                $location,
                                                $http) {


    $scope.init = function() {

        var demande = {demandeStudy : "0", demandeStudyDocNeeded : "1"};
        var decision = {demandRefusee : "0", demandAcceptee : "0", demandAccepteeCond : "1"};
        var documentionManagement = {contractReceived : "0", documentNeeded : "0", contractPayement : "0"};
        var customObject = {demande : demande, decision : decision, documentionManagement : documentionManagement}

        var dealer1 = {tiers :"110", nom : "Dupont SARL", convention :"oui", all : "0", none : "1", custom : "0", customObject : customObject};
        var dealer2 = {tiers :"150", nom : "Minolta SARL", convention :"non", all : "0", none : "1", custom : "0", customObject : customObject};
        var dealer3 = {tiers :"115", nom : "Canon SA", convention :"non", all : "0", none : "1", custom : "0", customObject : customObject};
        var dealer4 = {tiers :"160", nom : "Company SARL", convention :"oui", all : "0", none : "1", custom : "0", customObject : customObject};


    	$scope.dealerList = [dealer1, dealer2, dealer3, dealer4];

        // we check if the object is in the session
        var obj = $cookies.get('dealerSelected');
        if(obj != null || obj !=undefined){
            var paysSelecetd = JSON.parse(obj);
            angular.forEach($scope.dealerList, function(key, indice) {
                if(key.nom == paysSelecetd.nom){
                    $scope.dealerList[indice] = paysSelecetd;
                }
            });
        }

        var log = [];
        $scope.paysCSV = [];
        angular.forEach($scope.dealerList, function(key, indice) {
            $scope.paysCSV.push({ dealer : key.nom});
        });
        $scope.header = ["DEALERS"]

	};
	

    $scope.getPaysCSV = function(dealerList){
        var log = [];
        angular.forEach(dealerList, function(indice, key) {
            this.push(key);
        }, log);
        return log;
    };

$scope.getHeader = function () {return ["Pays"]};
    $scope.init();

}]);
