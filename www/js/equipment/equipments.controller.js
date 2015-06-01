angular.module('equipment', [])

.controller('EquipmentsCtrl', function($scope, EquipmentService) {
console.log('EquipmentCtrls');

  EquipmentService.getAll().then(function(docs) {
    $scope.equipments = docs.rows;
  })

});
