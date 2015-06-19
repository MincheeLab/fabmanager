(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialsCtrl', MaterialsCtrl);

  MaterialsCtrl.$inject = ['$scope', 'MaterialCollection', 'presets', '$ionicLoading'];

  function MaterialsCtrl($scope, MaterialCollection, presets, $ionicLoading) {
    $ionicLoading.show();
    $scope.presets = presets;
    $scope.data = {shouldShowDelete: false};

    MaterialCollection.getList().then(function (docs) {
      $scope.collection = docs;
      $scope.materials = docs.rows;
      $ionicLoading.hide();
    });
  }
})();
