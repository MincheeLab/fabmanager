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

    var _presets = {
      materialType: ['Acrylic', 'Plywood', 'MDF', 'ABS', 'PLA', 'Nylon'],
      materialColor: ['Natural', 'White', 'Black'],
      materialUsage: ['Hand Work', '3D Printer', 'Laser Cutter', 'CNC Milling'],
      techPair: ['Size', 'Weight', 'Thickness'],
      financialPair: ['Unit', 'Cost per Unit', 'Supplier', 'Sourcing Price'],
      units: ['gram', 'meter', 'm(2)']
    };

    // debug info only
    db.info().then(function (info) {
      console.log(info);
    });

    var service = {
      init: init,
      getList: getList,
      save: save,
      getPresets: getPresets
    };

    return service;

    function init() {
    }

    function getList() {
      var self = this;
      return db.allDocs({
        include_docs: true,
        descending: true,
        attachments: true
      }).then(function(docs) {
        return angular.extend(docs, self);
      });
    }

    function save() {
      var obj = JSON.parse(JSON.stringify(this));
      console.log(obj);
      if (this._id) {
        return db.put(obj);
      }
      return db.post(obj);
    }

    function getPresets() {
      return _presets;
    }
  }
})();
