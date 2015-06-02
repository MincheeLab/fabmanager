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
    
    var options = {
     maximumImagesCount: 10,
     width: 800,
     height: 800,
     quality: 80
    };

    $scope.selectPicture = function() {
      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          for (var i = 0; i < results.length; i++) {
            var f = {
              "content_type": "image/jpeg",
              "data": new Blob([$cordovaFile.readAsArrayBuffer(results[i])])
            };
            $scope.equipment._attachments["image.jpeg"] = f;
          }
        }, function(error) {
          console.log('error getting photos');
        });
      }
    }
})();
