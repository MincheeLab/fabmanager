(function () {
  'use strict';

  angular
    .module('config')
    .controller('ConfigCtrl', ConfigCtrl);

  ConfigCtrl.$inject = ['$scope', 'ConfigService'];

  function ConfigCtrl($scope, ConfigService) {

    ConfigService.getList().then(function (docs) {
      $scope.config = docs;
      $scope.lab   = docs.rows;
    });

    $scope.save = function() {
      console.log('saved!');
    };
  }
})();
