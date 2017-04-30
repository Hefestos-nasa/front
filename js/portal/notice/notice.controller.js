angular
  .module('NoticeController', [])
  .controller('NoticeController', NoticeController)

  NoticeController.$inject = ['$stateParams']

  function NoticeController($stateParams) {
    console.log($stateParams.noticeId)
  }
