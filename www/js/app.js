(function () {
  /* global cordova, StatusBar */
  'use strict';

  angular
    .module('fabman', ['ionic', 'starter.controllers', 'equipment', 'material', 'member', 'event'])

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
        },
        resolve: {
          equipment: ['EquipmentModel', function (EquipmentModel) {
            return EquipmentModel.load({});
        }]
        }
      })

      .state('app.equipment_show', {
        url: '/equipment/:id',
        views: {
          'equipment-view': {
            templateUrl: 'components/equipment/equipment-show.html',
            controller: 'EquipmentShowCtrl',
          }
        },
        resolve: {
          equipment: ['EquipmentModel', '$stateParams', function (EquipmentModel, $stateParams) {
            return EquipmentModel.get($stateParams.id);
        }]
        }
      })

      .state('app.equipment_edit', {
        url: '/:id/edit',
        views: {
          'menuContent': {
            templateUrl: 'components/equipment/equipment-form.html',
            controller: 'EquipmentFormCtrl',
          }
        },
        resolve: {
          equipment: ['EquipmentModel', '$stateParams', function (EquipmentModel, $stateParams) {
            return EquipmentModel.get($stateParams.id);
          }]
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

      .state('app.material_new', {
        url: '/material/new',
        views: {
          'menuContent': {
            templateUrl: 'components/material/material-form.html',
            controller: 'MaterialFormCtrl'
          }
        },
        resolve: {
          material: ['MaterialModel', function (MaterialModel) {
            return MaterialModel.load({});
          }]
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

      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'components/event/events.html',
            controller: 'EventsCtrl'
          }
        }
      })
      
      .state('app.event_show', {
        url: '/events/:id',
        views: {
          'menuContent': {
            templateUrl: 'components/event/event-show.html',
            controller: 'EventShowCtrl'
          }
        },
        resolve: {
          event: ['EventModel', '$stateParams', function(EventModel, $stateParams) {
            EventModel.get($stateParams.id).then(function(e) {
              return EventModel.load(e);
            });
          }]
        }
      })
      
      .state('app.event_new', {
        url: '/events/new',
        views: {
          'menuContent': {
            templateUrl: 'components/event/event-form.html',
            controller: 'EventFormCtrl'
          }
        },
        resolve: {
          event: ['EventModel', function(EventModel) {
            return EventModel.load({});
          }]
        }
      })
      
      ;

      $urlRouterProvider.otherwise('/app/dashboard');

    });
})();
