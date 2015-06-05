(function () {
  'use strict';

  angular
    .module('admin')
    .controller('AdminCtrl', AdminCtrl);

  AdminCtrl.$inject = ['$scope', 'AdminService'];

  function AdminCtrl($scope, AdminService) {

    AdminService.getList().then(function (docs) {
      $scope.admin = docs;
      $scope.lab   = docs.rows;
    });

    $scope.save = function() {
      console.log('saved!');
    };
  }
})();
