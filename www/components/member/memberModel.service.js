(function () {
  'use strict';

  angular
    .module('member', ['pouchdb', 'ngCordova'])
    .factory('MemberModel', MemberModel);

  MemberModel.$inject = ['pouchDB'];

  /**
   * @desc EquipmentModel
   *
   */
  function MemberModel(pouchDB) {
    var db = pouchDB('member');

    var service = {
      load: loadData,
      get: getElement,
      save: save,
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
