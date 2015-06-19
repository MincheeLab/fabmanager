(function() {

'use strict';

angular.module('event').controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = ['$scope', 'EventCollection'];

function EventsCtrl($scope, EventCollection) {
  $scope.$on('$ionicView.enter', function() {
    $scope.refresh();
  });
  
  $scope.upcoming = [];
  
  $scope.refresh = function() {
    EventCollection.getList().then(function(docs) {
      $scope.upcoming = docs.rows;
    });  
  }
}

})();