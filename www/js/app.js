(function () {
  /* global cordova, StatusBar */
  'use strict';

  angular.module('fabman', ['ionic', 'starter.controllers', 'equipment'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html'
        }
      }
    })

    .state('app.equipments', {
      url: '/equipments?refresh',
      views: {
        'menuContent': {
          templateUrl: 'components/equipment/equipments.html',
          controller: 'EquipmentsCtrl'
        }
      }
    })

    .state('app.equipment_new', {
      url: '/equipments/new',
      views: {
        'menuContent': {
          templateUrl: 'components/equipment/equipment-form.html',
          controller: 'EquipmentFormCtrl'
        }
      }
    })

    .state('app.equipments.show', {
      url: '/:id',
      views: {
        'menuContent': {
          templateUrl: 'components/equipment/equipment-show.html',
          controller: 'EquipmentShowCtrl'
        }
      }
    })

    .state('app.materials', {
      url: '/materials',
      views: {
        'menuContent': {
          templateUrl: 'components/material/materials.html',
          controller: 'MaterialsCtrl'
        }
      }
    })

    .state('app.members', {
      url: '/members',
      views: {
        'menuContent': {
          templateUrl: 'components/member/members.html',
          controller: 'MembersCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/app/dashboard');

  });
})();
