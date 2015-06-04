(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialFormCtrl', MaterialFormCtrl);

  MaterialFormCtrl.$inject = ['$scope', 'material', '$cordovaCamera', '$cordovaFile'];

  function MaterialFormCtrl($scope, material, $cordovaCamera, $cordovaFile) {
    $scope.material = material;
    if (!angular.isDefined($scope.material.techPair)) { $scope.material.techPair = {}; }
    
    $scope.save = function(e) {
      e.save().then(function(e) {
        
      });
    }
  }
})();
