(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingFormCtrl', BookingFormCtrl);

  BookingFormCtrl.$inject = ['$scope', 'booking', '$state', '$stateParams'];

  /**
   * @desc BookingFormCtrl
   *
   */
  function BookingFormCtrl($scope, booking, $state, $stateParams) {
    $scope.booking = booking;

    $scope.save = function(booking) {
      booking.save().then(function (booking) {
        $state.go('app.bookings', booking.objRef);
      });
    };
  }
})();
