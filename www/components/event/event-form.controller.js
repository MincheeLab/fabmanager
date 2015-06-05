(function() {
'use strict';

angular.module('event').controller('EventFormCtrl', EventFormCtrl);
EventFormCtrl.$inject = ['$state', '$scope', 'event'];

function EventFormCtrl($state, $scope, event) {
  $scope.e = event;
  $scope.$watch('e.title', function() {
    $scope.$parent.newEventTitle = $scope.e.title;
  });
  $scope.save = function(e) {
    e.save().then(function(doc) {
      $state.go('app.events');
    });
  };
}

})();