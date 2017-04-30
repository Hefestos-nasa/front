angular
  .module('Routes', ['ui.router'])
  .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeController'
      })
      .state('category', {
        url: '/category',
        templateUrl: 'js/category/category.html',
        controller: 'CategoryController'
      })

    $urlRouterProvider.otherwise('/')
  }
