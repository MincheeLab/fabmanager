(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentShowCtrl', EquipmentShowCtrl);

  EquipmentShowCtrl.$inject = ['$scope', 'equipment', '$state', '$ionicPopup'];

  function EquipmentShowCtrl($scope, equipment, $state, $ionicPopup) {
    $scope.equipment = equipment;

    $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Delete Equipment',
       template: 'Are you sure you want to delete this equipment?'
     });
     confirmPopup.then(function(res) {
       if (res) {
         $scope.equipment.remove().then(function(item) {
           $state.go('app.equipments');
         });
       }
     });
   };
  }
})();
