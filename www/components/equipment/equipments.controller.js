angular.module('equipment')

.controller('EquipmentsCtrl', function($scope, EquipmentService) {

  EquipmentService.getAll().then(function(docs) {
    $scope.equipments = docs.rows;
  });

  EquipmentService.changes(function(e) {
    console.log(e);
  });

});
