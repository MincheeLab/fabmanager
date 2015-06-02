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
      $scope.equipment.save().then(function (equipment) {
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
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		};

	  $cordovaCamera.getPicture(options).then(
		function(imageURI) {
			window.resolveLocalFileSystemURL(imageURI, function(fileEntry) {
		     
//			 $cordovaFile.checkFile(fileEntry.nativeURL).then(function(sucess){console.log(success)}).catch(console.log.bind(console));
			 $cordovaFile.readAsDataURL('/')
			 .then(function(success) {
			   console.log(success);
			 })
			 .catch(console.log.bind(console))
			 ;
//			 console.log(du);
//			 console.log(fileEntry);
//				$scope.picData = fileEntry.nativeURL;
//				$scope.ftLoad = true;
//				var image = document.getElementById('myImage');
//				image.src = fileEntry.nativeURL;
  			});
//			$ionicLoading.show({template: 'Foto acquisita...', duration:500});
		},
		function(err){
//			$ionicLoading.show({template: 'Errore di caricamento...', duration:500});
		}
      )
	};
  }
})();
