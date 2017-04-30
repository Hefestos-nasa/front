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
      .state('categorie', {
        url: '/categorie',
        templateUrl: 'js/categorie/categorie.html',
        controller: 'CategorieController'
      })
      .state('notice', {
        url: '/notice/:noticeId',
        templateUrl: 'js/notice/notice.html',
        controller: 'NoticeController'
      })

    $urlRouterProvider.otherwise('/')
  }
