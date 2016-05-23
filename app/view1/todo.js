'use strict'
angular.module('monTableau', [])
        .controller(monTableauCtrl, function(){
    var tb = this
    tb.todos = [
        {reference_article:'ch10' , libelle:'chemise bleue' prix_unitaire_HT: 15}
        {reference_article:'ch15' , libelle:'chemise rouge' prix_unitaire_HT: 17}
        {reference_article:'ch20' , libelle:'chemise verte' prix_unitaire_HT: 20}
        {reference_article:'ch05' , libelle:'chemise grise' prix_unitaire_HT: 25}
    ];

    tb.to
  });