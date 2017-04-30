angular
  .module('Routes', ['ui.router'])
  .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('portal', {
        url: '/',
        templateUrl: 'js/portal/portal.html',
        controller: 'PortalController'
      })

      /**
       * Todas categorias
       */
      .state('portal.uninews', {
        url: 'categorie/uninews',
        templateUrl: 'js/portal/categorie/categorie.html',
        controller: 'CategorieController'
      })

      /**
       *
       */
      .state('portal.apod', {
        url: 'categorie/apod',
        templateUrl: 'js/portal/categorie/categorie.html',
        controller: 'CategorieController'
      })

      .state('portal.notice', {
        url: 'notice/:noticeId',
        templateUrl: 'js/portal/notice/notice.html',
        controller: 'NoticeController'
      })
      .state('login', {
        url: 'login',
        templateUrl: 'js/account/login/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: 'register',
        templateUrl: 'js/account/register/register.html',
        controller: 'RegisterController'
      })

    $urlRouterProvider.otherwise('categorie/uninews')
  }
