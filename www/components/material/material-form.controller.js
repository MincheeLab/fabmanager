(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialFormCtrl', MaterialFormCtrl);

  MaterialFormCtrl.$inject = ['$scope', 'MaterialModel', 'material', '$cordovaCamera', '$cordovaFile'];

  function MaterialFormCtrl($scope, MaterialModel, material, $cordovaCamera, $cordovaFile) {
    $scope.material = material;
  }
})();
