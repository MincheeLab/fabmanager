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

//    $scope.remove = function(equipment, index) {
//      equipment.remove().then(function(e) {
//        console.log('return remove item',equipment, e);
//        $scope.collection.removeOne(index);
//      });
//    };
  }
})();
