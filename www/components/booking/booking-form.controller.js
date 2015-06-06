(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingFormCtrl', BookingFormCtrl);

  BookingFormCtrl.$inject = ['$scope', 'booking', '$state'];

  /**
   * @desc BookingFormCtrl
   *
   */
  function BookingFormCtrl($scope, booking, $state) {
    $scope.booking = booking;

    $scope.save = function(booking) {
      booking.save().then(function (booking) {
        $state.go('app.bookings', {refresh: true});
      });
    };
  }
})();
