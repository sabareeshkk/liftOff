var myApp = angular.module('lift', ['ui.router', 'chart.js']);

/**
@param $stateProvider[object] manage states
@param $urlRouterProvider[object] manage url-routing
*/
myApp.config(function($stateProvider, $urlRouterProvider) {

  const HomeState = {
    name: 'home',
    url: '/home',
    controller:'QuestionCtrl',
    controllerAs: 'home',
    templateUrl: 'pages/home.html'
  }

  $stateProvider.state(HomeState);

  $urlRouterProvider.otherwise('/home');

})