(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingFormCtrl', BookingFormCtrl);

  BookingFormCtrl.$inject = ['$scope', 'booking', '$state', '$stateParams', '$ionicPopup'];

  /**
   * @desc BookingFormCtrl
   *
   */
  function BookingFormCtrl($scope, booking, $state, $stateParams, $ionicPopup) {
    $scope.booking = booking;

    $scope.save = function (booking) {
      booking.save().then(function (booking) {
        $state.go('app.bookings', booking.objRef);
      });
    };

    $scope.showMessage = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Booking an Equipment',
        template: 'Before requesting a booking make sure you have read the terms and conditions, checked the opening hours and verified slots already booked.'
      });
    };
    $scope.showMessage();
  }
})();
