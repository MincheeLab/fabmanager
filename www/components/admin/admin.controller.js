(function () {
  'use strict';

  angular
    .module('admin')
    .controller('AdminCtrl', AdminCtrl);

  AdminCtrl.$inject = ['$scope', 'AdminService'];

  function AdminCtrl($scope, AdminService) {

    AdminService.getList().then(function (docs) {
      $scope.collection = docs;
    });

    $scope.save = function() {
      console.log('saved!');
    }
  }
})();
