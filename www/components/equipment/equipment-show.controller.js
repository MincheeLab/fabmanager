(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentShowCtrl', EquipmentShowCtrl);

  EquipmentShowCtrl.$inject = ['$scope', 'equipment'];

  function EquipmentShowCtrl($scope, equipment) {
    console.log('ctl ', equipment);
    $scope.equipment = equipment;
  }
})();
