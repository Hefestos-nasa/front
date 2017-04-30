angular
  .module('NoticeService', [])
  .service('NoticeService', NoticeService)

  NoticeService.$inject = ['$http']

  function NoticeService($http) {
    var url = '192.168.90.102:3000/'
    var vm = this

    vm.getPhotosFromDay = getPhotosFromDay
    vm.getAsteroids = getAsteroids
    vm.getImagesFromMars = getImagesFromMars
    vm.getComets = getComets
    vm.getFireBalls = getFireBalls

    /**
     * Retorna a foto, título e descrição do dia
     * @return array
     */
    function getPhotosFromDay() {
      return $http({
        method: 'GET',
        url: url + 'foto-do-dia'
      })
    }

    /**
     * @return array
     */
    function getAsteroids() {
      return $http({
        method: 'GET',
        url: url + 'asteroides'
      })
    }

    /**
     * @return array
     */
    function getImagesFromMars() {
      return $http({
        method: 'GET',
        url: url + 'imagens-marte'
      })
    }

    /**
     * @return array
     */
    function getComets() {
      return $http({
        method: 'GET',
        url: url + 'nhats'
      })
    }

    /**
     * @return array
     */
    function getFireBalls() {
      return $http({
        method: 'GET',
        url: url + 'bolas-de-fogo'
      })
    }
  }
