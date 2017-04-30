angular
  .module('CategorieService', [])
  .service('CategorieService', CategorieService)

  CategorieService.$inject = ['$http']

  function CategorieService($http) {
    var uri = 'https://microservice-hefestus.herokuapp.com/'
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
        url: uri + 'foto-do-dia'
      })
    }

    /**
     * @return array
     */
    function getAsteroids() {
      return $http({
        method: 'GET',
        url: uri + 'asteroides'
      })
    }

    /**
     * @return array
     */
    function getImagesFromMars() {
      return $http({
        method: 'GET',
        url: uri + 'imagens-marte'
      })
    }

    /**
     * @return array
     */
    function getComets() {
      return $http({
        method: 'GET',
        url: uri + 'nhats'
      })
    }

    /**
     * @return array
     */
    function getFireBalls() {
      return $http({
        method: 'GET',
        url: uri + 'bolas-de-fogo'
      })
    }
  }
