(function () {
  'use strict';

  angular
    .module('admin', ['pouchdb'])
    .factory('AdminService', AdminService);

  AdminService.$inject = ['pouchDB'];

  /**
   * @desc AdminService
   *
   */
  function AdminService(pouchDB) {
    var db = pouchDB('admin');

//    var presets = {
//      dbs: ['equipment', 'material', 'member'];
//    };

    // debug info only
    db.info().then(function (info) {
      console.log(info);
    });

    var service = {
      init: init,
      getList: getList,
      save: save,
      remove: remove,
    };

    return service;

    function init() {
    }

    function getList() {
      return db.allDocs({
        include_docs: true,
        descending: true,
        attachments: true
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
