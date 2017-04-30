angular
  .module('HomeService', [])
  .service('HomeService', HomeService)

  HomeService.$inject = ['$http']

  function HomeService($http) {
    var url = ''
    var vm = this

    vm.getAll = getAll

    function getAll() {
      return $http({
        method: 'GET',
        url: url
      })
    }
  }
