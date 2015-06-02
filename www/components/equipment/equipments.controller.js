(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentsCtrl', EquipmentsCtrl);

  EquipmentsCtrl.$inject = ['$scope', 'EquipmentCollection'];

  function EquipmentsCtrl($scope, EquipmentCollection) {

    EquipmentCollection.getList().then(function (docs) {
      $scope.collection = docs;
      $scope.equipments = docs.rows;
    });
  }
})();
