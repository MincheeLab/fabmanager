(function () {
  'use strict';

  angular
    .module('member')
    .controller('MembersCtrl', MembersCtrl);

  MembersCtrl.$inject = ['$scope','$state', 'MemberService'];

  function MembersCtrl($scope, $state, MemberService) {
    
  }
})();
