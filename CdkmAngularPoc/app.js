// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bnp-poc', ['ui.router',
	'page.parametragePays',
	'page.editPays',
	'page.parametrageDealers',
	'page.editDealer'])


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	// pour désactiver requêtes options de merde
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	$httpProvider.defaults.headers.delete = {};

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise("/parametragePays");
});

