(function () {
  'use strict';

  angular
    .module('fabman')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state', '$ionicModal', 'config', 'presets'];

  function AppCtrl($scope, $state, $ionicModal, config, presets) {

    /* if first time run => setup wizard
     if only local db => display dashboard with local data
     if remote server set => login first if not yet logon
    */

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };
  }
})();
