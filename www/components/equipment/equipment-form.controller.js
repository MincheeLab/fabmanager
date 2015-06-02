(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentFormCtrl', EquipmentFormCtrl);

  EquipmentFormCtrl.$inject = ['$scope', 'EquipmentService', '$state'];

  /**
   * @desc EquipmentFormCtrl
   *
   */
  function EquipmentFormCtrl($scope, EquipmentService, $state) {
    $scope.equipment = {};

    $scope.save = function(equipment) {
      EquipmentService.post(equipment).then(function (equipment) {
        $state.go('app.equipments');
      });
    };
  }
})();
