(function () {
  'use strict';

  angular
    .module('material')
    .controller('MaterialFormCtrl', MaterialFormCtrl);

  MaterialFormCtrl.$inject = [
    '$scope',
    'material',
    'presets',
    '$state',
    '$cordovaCamera',
    '$cordovaFile'
  ];

  function MaterialFormCtrl($scope, material, presets, $state, $cordovaCamera, $cordovaFile) {
    $scope.material = material;
    $scope.presets = presets;

    $scope.save = function(e) {
      e.save().then(function(e) {
        $state.go('app.materials', {refresh: true});
      });
    };
  }
})();
