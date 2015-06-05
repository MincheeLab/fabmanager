(function () {
  'use strict';

  angular
    .module('config', ['pouchdb'])
    .factory('ConfigService', ConfigService);

  ConfigService.$inject = ['pouchDB'];

  /**
   * @desc ConfigService
   *
   */
  function ConfigService(pouchDB) {
    var db = pouchDB('config');
    //var local = new PouchDB('local_db');
    //local.sync(db, {live: true, retry: true}).on('error', console.log.bind(console));

    var _presets = {
      materialType: ['Acrylic', 'Plywood', 'MDF', 'ABS', 'PLA', 'Nylon'],
      materialColor: ['Natural', 'White', 'Black'],
      materialUsage: ['Hand Work', '3D Printer', 'Laser Cutter', 'CNC Milling'],
      techPair: ['Size', 'Weight', 'Thickness'],
      financialPair: ['Unit', 'Cost per Unit', 'Supplier', 'Sourcing Price'],
      units: ['gram', 'meter', 'm(2)']
    };

    //    function createDesignDoc(name, mapFunction) {
    //  var ddoc = {
    //    _id: '_design/' + name,
    //    views: {
    //    }
    //  };
    //  ddoc.views[name] = { map: mapFunction.toString() };
    //  return ddoc;
    //}
    //
    //var designDoc = createDesignDoc('my_index', function (doc) {
    //  emit(doc.name);
    //});
    //pouch.put(designDoc).then(function (doc) {
    //  // design doc created!
    //}).catch(function (err) {
    //  // if err.name === 'conflict', then
    //  // design doc already exists
    //});


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
