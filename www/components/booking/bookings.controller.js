(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingsUpcomingCtrl', BookingsCtrl);

  BookingsCtrl.$inject = ['$scope', 'bookings'];

  function BookingsCtrl($scope, bookings) {
    $scope.collection = bookings;
    console.log(bookings);
  }
})();
