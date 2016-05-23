
angular.module('bonCommande', []).controller('BonCommandeCtrl', function(){
       console.log("aze");
        var bonCom = this;
        bonCom.bonComs =[
                    {reference_article:'NB011',	libelle:'java pour les null',	 prix_unitaire_HT:25, quantite: 50 },
                    {reference_article:'NB023',	libelle:'sql pour les null',	 prix_unitaire_HT:22, quantite: 50 },
                    {reference_article:'NB032',	libelle:'angular pour les null', prix_unitaire_HT:19.5, quantite: 50 },
                    {reference_article:'NB041',	libelle:'Ruby pour les null',	 prix_unitaire_HT:14.4, quantite: 50 }
    ];
});