(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentFormCtrl', EquipmentFormCtrl);

  EquipmentFormCtrl.$inject = ['$scope', 'EquipmentModel', 'EquipmentCollection', '$state'];

  /**
   * @desc EquipmentFormCtrl
   *
   */
  function EquipmentFormCtrl($scope, Equipment, EquipmentCollection, $state) {
    $scope.equipment = Equipment.load({});

    $scope.save = function(equipment) {
      $scope.equipment.post(equipment).then(function (equipment) {
        EquipmentCollection.push(equipment);
        $state.go('app.equipments');
      });
    };
  }
})();
