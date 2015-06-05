(function () {
  'use strict';

  angular
    .module('equipment', ['pouchdb', 'ngCordova'])
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
      save: save,
      remove: remove,
    };

    return service;

    function loadData(item) {
      if (angular.isObject(item.doc)) {
        return angular.extend(item.doc, this);
      }
      return angular.extend(item, this);
    }

    function getElement(id) {
      var self = this;
      return db.get(id).then(function(item) {
        return self.load(item);
      });
    }

    function save() {
      var obj = JSON.parse(JSON.stringify(this));
      if (this._id) {
        return db.put(obj);
      }
      return db.post(obj);
    }

    function remove() {
      return db.remove(this);
    }
  }
})();
