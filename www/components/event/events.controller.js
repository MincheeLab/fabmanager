(function() {

'use strict';

angular.module('event').controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = ['$scope', 'EventCollection'];

function EventsCtrl($scope, EventCollection) {
  $scope.upcoming = [];
  
  EventCollection.getList().then(function(docs) {
    $scope.upcoming = docs.rows;
  });  
}

})();