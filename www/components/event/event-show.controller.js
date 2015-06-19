(function() {
'use strict';

angular.module('event').controller('EventShowCtrl', EventShowCtrl);
EventShowCtrl.$inject = ['$scope', 'event'];

function EventShowCtrl($scope, event) {
  $scope.e = event;
}

})();