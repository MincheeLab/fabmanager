(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialFormCtrl', MaterialFormCtrl);

  MaterialFormCtrl.$inject = ['$scope', 'material', '$state', '$cordovaCamera', '$cordovaFile'];

  function MaterialFormCtrl($scope, material, $state, $cordovaCamera, $cordovaFile) {
    $scope.material = material;
    if (!angular.isDefined($scope.material.techPair)) { $scope.material.techPair = {}; }

    $scope.save = function(e) {
      e.save().then(function(e) {
        $state.go('app.materials', {refresh: true});
      });
    };
  }
})();
