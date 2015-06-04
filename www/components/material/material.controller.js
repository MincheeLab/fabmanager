(function () {
  'use strict';
  
  angular
    .module('material')
    .controller('MaterialsCtrl', MaterialsCtrl);
    
  MaterialsCtrl.$inject = ['$scope', '$state', 'MaterialService'];
  
  function MaterialsCtrl($scope, $state, MaterialService) {
    
  }
  
})();
