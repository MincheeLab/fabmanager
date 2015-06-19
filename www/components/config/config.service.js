(function () {
  'use strict';

  angular
    .module('config', ['pouchdb'])
    .factory('ConfigService', Config);

  Config.$inject = ['pouchDB'];

  /**
   * @desc Config
   *
   */
  function Config(pouchDB) {
    var db = pouchDB('config');

    //var remote = new PouchDB('https://...');
    //db.sync(remote, {live: true, retry: true}).on('error', console.log.bind(console));

    /*
      function createDesignDoc(name, mapFunction) {
        var ddoc = {
          _id: '_design/' + name,
          views: {
          }
        };
        ddoc.views[name] = { map: mapFunction.toString() };
        return ddoc;
      }

      var designDoc = createDesignDoc('my_index',
        function (doc) {
          emit(doc.name);
        }
      );

    pouch.put(designDoc).then(function (doc) {
      // design doc created!
    }).catch(function (err) {
      // if err.name === 'conflict', then
      // design doc already exists
    });
    */

    // debug info only
    //    db.info().then(function (info) {
    //      console.log(info);
    //    });

    var service = {
      getConfig: getConfig,
      getPresets: getPresets,
      loadPresets: loadPresets,
      loadConfig: loadConfig,
      save: save,
      dbInfo: dbInfo
    };

    return service;

    function init() {}

    function getConfig() {
      return db.get('config').catch(console.log.bind(console));
    }

    function loadConfig() {
      return {
        _id: 'config',
      };
    }

    function save(items) {
      return db.bulkDocs(items).catch(console.log.bind(console));
    }

    function getPresets(namespace) {
      return db.get('presets').then(function(item) {
        if (namespace && angular.isDefined(item[namespace])) {
          return item[namespace];
        }
        return item;
      }).catch(function(err) {
        console.log.bind(console);
      });
    }

    function loadPresets() {
      return {
        _id: 'presets',
        materialType: ['Acrylic', 'Plywood', 'MDF', 'ABS', 'PLA', 'Nylon'],
        materialColor: ['Natural', 'White', 'Black'],
        materialUsage: ['Hand Work', '3D Printer', 'Laser Cutter', 'CNC Milling'],
        techPair: ['Size', 'Weight', 'Thickness'],
        financialPair: ['Unit', 'Cost per Unit', 'Supplier', 'Sourcing Price'],
        units: ['gram', 'meter', 'm(2)'],
        eventType: ['Workshop', 'Talk', 'Hackaton']
      };
    }

    function dbInfo(dbname) {
      if (dbname) {
        var otherdb = pouchDB(dbname);
        return otherdb.info();
      }
      return db.info();
    }
  }
})();
