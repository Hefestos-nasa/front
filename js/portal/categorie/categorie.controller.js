angular
  .module('CategorieController', [])
  .controller('CategorieController', CategorieController)

  CategorieController.$inject = ['NoticeService']

  function CategorieController(NoticeService) {
    var vm = this

  }
