(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentsCtrl', EquipmentsCtrl);

  EquipmentsCtrl.$inject = ['$scope', 'EquipmentCollection', '$ionicLoading'];

  function EquipmentsCtrl($scope, EquipmentCollection, $ionicLoading) {
    $ionicLoading.show();

    $scope.load = function () {
      EquipmentCollection.getList().then(function (docs) {
        $scope.collection = docs;
        $scope.equipments = docs.rows;
        $ionicLoading.hide();
      });
    };

    $scope.$on('$ionicView.enter', function (e) {
      $scope.load();
    });
  }
})();
