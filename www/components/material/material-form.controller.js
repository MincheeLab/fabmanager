(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialFormCtrl', MaterialFormCtrl);

  MaterialFormCtrl.$inject = ['$scope', 'material', '$cordovaCamera', '$cordovaFile'];

  function MaterialFormCtrl($scope, material, $cordovaCamera, $cordovaFile) {
    $scope.material = material;
  }
})();
