(function() {
'use strict';

angular.module('event').controller('EventShowCtrl', EventShowCtrl);
EventShowCtrl.$inject = ['$scope', 'event'];

function EventShowCtrl($scope, event) {
  $scope.email = "myemail@email.com";
  $scope.e = event;
}

})();