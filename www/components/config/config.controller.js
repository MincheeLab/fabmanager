(function () {
  'use strict';

  angular
    .module('config')
    .controller('ConfigCtrl', ConfigCtrl);

  ConfigCtrl.$inject = ['$scope', 'config', 'presets', 'ConfigService'];

  function ConfigCtrl($scope, config, presets, ConfigService) {

    $scope.config = config || ConfigService.loadConfig();
    $scope.presets = presets || ConfigService.loadPresets();

    $scope.save = function (config, presets) {
      ConfigService.save([config, presets]).catch(console.log.bind(console));
    };
  }
})();
