(function() {
'use strict';

angular.module('event').controller('EventFormCtrl', EventFormCtrl);
EventFormCtrl.$inject = ['$state', '$scope', 'event', '$cordovaCamera', '$cordovaFile'];

function EventFormCtrl($state, $scope, event, $cordovaCamera) {
  $scope.e = event;
  $scope.$watch('e.title', function() {
    $scope.$parent.newEventTitle = $scope.e.title;
  });
  $scope.save = function(e) {
    e.save().then(function(doc) {
      $state.go('app.events', { 'refresh': true });
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
        console.log('pre set attachments');
        $scope.e._attachments = {"image.jpeg": {"data": dataURL, "contentType":"image/jpeg" }};
      },
      function(err){
      }
    )
  };
}

})();