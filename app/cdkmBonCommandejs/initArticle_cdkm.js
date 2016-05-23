
angular.module('bonCommande', [])
    .controller('BonCommandeCtrl', function(){
        var bonCom = this;
        bonCom.bonComs =[
                    {reference_article:'NB011',	libelle:'java pour les null',	 prix_unitaire_HT:25,   quantite: 50 },
                    {reference_article:'NB023',	libelle:'sql pour les null',	 prix_unitaire_HT:22,   quantite: 50 },
                    {reference_article:'NB032',	libelle:'angular pour les null', prix_unitaire_HT:19.5, quantite: 50 },
                    {reference_article:'NB041',	libelle:'Ruby pour les null',	 prix_unitaire_HT:14.4, quantite: 50 }
    ];

    //ajout des operation de calcul des montant en HT et TTC
        //bonCom.calculerMontantHT = function(){
           // var tva = 0.19;
            //var montantHT = 10 ;//bonCom.prix_unitaire_HT * bonCom.quantite;
            //return 0;// bonCom.prix_unitaire_HT;// * bonCom.quantite;
       // };

        bonCom.calculerMontantHT = function(x, y){
          var montantHT = x  * y;
          return montantHT;
        };

        bonCom.boolMantantSUp1000 = function(x, y){
            var valeurBool = bonCom.calculerMontantHT(x, y) >1000 ? 1 : 0;
            return valeurBool;
        };

        bonCom.calculerMontantTTC = function(x, y){
          var tva = 1.19;
          var montantHT = x  * y * tva;
          return montantHT;
        };

    });




