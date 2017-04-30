angular
  .module('CategorieController', [])
  .controller('CategorieController', CategorieController)

  CategorieController.$inject = ['CategorieService']

  function CategorieController(CategorieService) {
    var vm = this

    CategorieService
      .getPhotosFromDay()
      .then(function (data) {
        vm.categories = data.data.result
        console.log(vm.categories)
      })
  }
