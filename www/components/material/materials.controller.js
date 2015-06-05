(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialsCtrl', MaterialsCtrl);

  MaterialsCtrl.$inject = ['$scope', 'MaterialCollection', 'presets'];

  function MaterialsCtrl($scope, MaterialCollection, presets) {

    $scope.presets = presets;
    $scope.data = {shouldShowDelete: false};

    MaterialCollection.getList().then(function (docs) {
      $scope.collection = docs;
      $scope.materials = docs.rows;
    });
  }
})();
