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

    var _presets = {
      materialType: ['Acrylic', 'Plywood', 'MDF', 'ABS', 'PLA', 'Nylon'],
      materialColor: ['Natural', 'White', 'Black'],
      materialUsage: ['Hand Work', '3D Printer', 'Laser Cutter', 'CNC Milling'],
      techPair: ['Size', 'Weight', 'Thickness'],
      financialPair: ['Unit', 'Cost per Unit', 'Supplier', 'Sourcing Price'],
      units: ['gram', 'meter', 'm(2)']
    };

    var service = {
      load: loadData,
      get: getElement,
      save: save,
      remove: remove,
      presets: _presets,
      addKeyPair: addKeyPair,
      removeKeyPair: removeKeyPair
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
      console.log('saving');
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
  }
})();
