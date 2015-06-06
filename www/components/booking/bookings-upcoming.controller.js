(function () {
  'use strict';

  angular
    .module('booking')
    .controller('BookingsUpcomingCtrl', BookingsCtrl);

  BookingsCtrl.$inject = ['$scope', '$stateParams', 'BookingCollection', '$ionicLoading'];

  function BookingsCtrl($scope, $stateParams, BookingCollection, $ionicLoading) {
    $scope.item = {_id: $stateParams.id, name: $stateParams.name};
    BookingCollection.getBookings($scope.item).then(function(collection) {
      $scope.collection = collection;
      console.log(collection);
    });
  }
})();
