(function () {
  'use strict';

  angular
    .module('equipment', ['pouchdb'])
    .factory('EquipmentModel', EquipmentModel);

  EquipmentModel.$inject = ['pouchDB'];

  /**
   * @desc EquipmentModel
   *
   */
  function EquipmentModel(pouchDB) {
    var db = pouchDB('equipment');

    var service = {
      load: loadData,
      get: getElement,
      remove: remove,
    };

    return service;

    function loadData(obj) {
      if (angular.isObject(obj.doc)) {
        return angular.extend(obj.doc, this);
      }
      return angular.extend(obj, this);
    }

    function getElement(id) {
      return db.get(id);
    }

    function post(obj) {
      return db.post(obj);
    }

    function remove() {
      return db.remove(this);
    }
  }
})();
