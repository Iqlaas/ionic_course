angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('simpleToDoApp', {
    url: '/index',
    templateUrl: 'templates/simpleToDoApp.html',
    controller: 'simpleToDoAppCtrl'
  })

  .state('create', {
    url: '/create',
    templateUrl: 'templates/create.html',
    controller: 'createCtrl'
  })

  .state('edit', {
    url: '/edit/:id', // pass parameters to page
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

  .state('details', {
    url: '/details/:id', // pass parameters to page
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

$urlRouterProvider.otherwise('/index')

  

});