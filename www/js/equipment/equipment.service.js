(function () {
  'use strict';

  angular
    .module('equipment')
    .factory('EquipmentService', EquipmentService);

  EquipmentService.$inject = ['pouchDB'];

  /**
   * @desc AccountService
   *
   */
  function EquipmentService(PouchDB) {
    var db = new PouchDB('equipment');

    var service = {
      get: getElement,
      getAll: getAll,
      post: post
    };

    return service;

    function getElement(id) {
      return db.get(id);
    }

    function getAll(filters) {
      if (angular.isUndefined(filters)) {
        return db.allDocs({
          include_docs: true
        });
      } else {
        return db.query();
      }
    }

    function post(obj) {
      return db.post(obj);
    }
  }
})();
