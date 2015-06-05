(function () {
  'use strict';

  angular
    .module('equipment')
    .controller('EquipmentFormCtrl', EquipmentFormCtrl);

  EquipmentFormCtrl.$inject = ['$scope', 'equipment', '$state', '$cordovaCamera', '$cordovaFile'];

  /**
   * @desc EquipmentFormCtrl
   *
   */
  function EquipmentFormCtrl($scope, equipment, $state, $cordovaCamera, $cordovaFile) {
    $scope.equipment = equipment;
console.log($scope.equipment);
    $scope.save = function(equipment) {
      equipment.save().then(function (equipment) {
        $state.go('app.equipments',{refresh: true});
      });
    };
    
    var options = {
     maximumImagesCount: 10,
     width: 800,
     height: 800,
     quality: 80
    };

    $scope.selectPicture = function() { 
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		};

	  $cordovaCamera.getPicture(options).then(
		function(dataURL) {
          $scope.equipment._attachments = {"image.jpeg": {"data": dataURL, "contentType":"image/jpeg" }};
		},
		function(err){
		  
		}
      )
	};
  }
})();
