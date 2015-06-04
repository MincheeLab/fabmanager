(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialsCtrl', MaterialsCtrl);

  MaterialsCtrl.$inject = ['$scope', 'MaterialCollection'];

  function MaterialsCtrl($scope, MaterialCollection) {
    MaterialCollection.getList().then(function (docs) {
      $scope.collection = docs;
      $scope.materials = docs.rows;
    });
  }

})();
