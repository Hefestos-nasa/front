angular
  .module('PortalController', [])
  .controller('PortalController', PortalController)

  PortalController.$inject = ['$state']

  function PortalController($state) {
    $state.go('portal.uninews')
  }
