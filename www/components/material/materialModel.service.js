(function () {
  'use strict';

  angular
    .module('material', ['pouchdb', 'ngCordova'])
    .factory('MaterialModel', MaterialModel);

  MaterialModel.$inject = ['pouchDB'];

  /**
   * @desc EquipmentModel
   *
   */
  function MaterialModel(pouchDB) {
    var db = pouchDB('material');

    var service = {
      load: loadData,
      get: getElement,
      save: save,
      remove: remove,
      addKeyPair: addKeyPair,
      removeKeyPair: removeKeyPair,
      changeQuantity: changeQuantity,
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

    function addKeyPair(namespace, key) {
      if (!angular.isDefined(this[namespace])) {
        this[namespace] = {};
      }
      this[namespace][key] = '';
    }

    function removeKeyPair(namespace, key) {

    }

    function changeQuantity(val) {
      this.quantity = parseInt(this.quantity) + parseInt(val);
      return this.save();
    }
  }
})();
