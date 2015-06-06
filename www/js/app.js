(function () {
  /* global cordova, StatusBar */
  'use strict';

  angular
    .module('fabman', ['ionic', 'config', 'equipment', 'material', 'member', 'event', 'booking'])

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

    var defaultRoute = '/app/dashboard';

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        resolve: {
          config: ['ConfigService', function (ConfigService) {
            return ConfigService.getConfig();
          }],
          presets: ['ConfigService', function (ConfigService) {
            return ConfigService.getPresets();
          }]
        }
      })

    .state('wizard', {
      url: '/setup',
      templateUrl: 'components/config/setup.html',
      controller: 'SetupCtrl'
    })
    //.state('wizard.step1',{})
    //.state('wizard.step2', {})
    //.state('wizard.step3', {})

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
        }
      }
    })

    .state('app.config', {
      url: '/config',
      views: {
        'menuContent': {
          templateUrl: 'components/config/config.html',
          controller: 'ConfigCtrl'
        }
      },
      resolve: {
        config: ['config', function (config) {
          return config;
        }],
        presets: ['presets', function(presets) {
          return presets;
        }]
      }
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
        'menuContent': {
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

    .state('app.bookings', {
      url: '/bookings?_id&name',
      views: {
        'menuContent': {
          templateUrl: 'components/booking/bookings.html',
          controller: 'BookingsUpcomingCtrl'
        }
      },
      resolve: {
        bookings: ['BookingCollection', '$stateParams', function(BookingCollection, $stateParams) {
          return BookingCollection.getBookings($stateParams);
        }]
      }
    })

    .state('app.booking_form', {
      url: '/booking_form?_id&name',
      views: {
        'menuContent': {
          templateUrl: 'components/booking/booking-form.html',
          controller: 'BookingFormCtrl'
        }
      },
      resolve: {
        booking: ['BookingModel', '$stateParams', function (BookingModel, $stateParams) {
          return BookingModel.load({}, {_id: $stateParams._id, name: $stateParams.name});
        }]
      }
    })

    .state('app.materials', {
      url: '/materials/?refresh',
      views: {
        'menuContent': {
          templateUrl: 'components/material/materials.html',
          controller: 'MaterialsCtrl'
        }
      },
      resolve: {
        presets: function (presets) {
          return presets;
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
        }],
        presets: function (presets) {
          return presets;
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
        event: ['EventModel', '$stateParams', function (EventModel, $stateParams) {
          EventModel.get($stateParams.id).then(function (e) {
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
        event: ['EventModel', function (EventModel) {
          return EventModel.load({});
        }]
      }
    })

    .state('app.material_edit', {
      url: '/material_edit/:id',
      views: {
        'menuContent': {
          templateUrl: 'components/material/material-form.html',
          controller: 'MaterialFormCtrl'
        }
      },
      resolve: {
        material: ['MaterialModel', '$stateParams', function (MaterialModel, $stateParams) {
          return MaterialModel.get($stateParams.id);
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

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise(defaultRoute);
  });
})();
