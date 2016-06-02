angular.module('page.parametragePays')

.controller('pageParametragePaysController', ['$scope',
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

        var pays1 = {nom : "France", all : "0", none : "1", custom : "0", customObject : customObject};
        var pays2 = {nom : "Maroc", all : "0", none : "0", custom : "1", customObject : customObject};
        var pays3 = {nom : "Espagne", all : "1", none : "0", custom : "0", customObject : customObject};
        var pays4 = {nom : "Nigeria", all : "0", none : "0", custom : "1", customObject : customObject};

    	$scope.paysList = [pays1, pays2, pays3, pays4];

        // we check if the object is in the session
        var obj = $cookies.get('paysSelected');
        if(obj != null || obj !=undefined){
            var paysSelecetd = JSON.parse(obj);
            angular.forEach($scope.paysList, function(key, indice) {
                if(key.nom == paysSelecetd.nom){
                    $scope.paysList[indice] = paysSelecetd;
                }
            });
        }

        var log = [];
        $scope.paysCSV = [];
        angular.forEach($scope.paysList, function(key, indice) {
            $scope.paysCSV.push({ pays : key.nom});
        });
        $scope.header = ["Pays"]

	};
	

    $scope.getPaysCSV = function(paysList){
        var log = [];
        angular.forEach(paysList, function(indice, key) {
            this.push(key);
        }, log);
        return log;
    };

$scope.getHeader = function () {return ["Pays"]};
    $scope.init();

}]);
