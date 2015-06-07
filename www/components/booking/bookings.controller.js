(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingsUpcomingCtrl', BookingsCtrl);

  BookingsCtrl.$inject = ['$scope', 'bookings'];

  function BookingsCtrl($scope, bookings) {
    $scope.collection = bookings;

    $scope.currentDate = null;
    $scope.isNewDate = function(item, index) {
      var newDate = item.from.date.split('T')[0];
      if (newDate !== $scope.currentDate) {
        $scope.currentDate = newDate;
        return true;
      }
      return false;
    };
  }
})();
