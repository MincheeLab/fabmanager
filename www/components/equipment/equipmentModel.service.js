(function () {
  'use strict';

  angular
    .module('equipment', ['pouchdb', 'config', 'ngCordova'])
    .factory('EquipmentModel', EquipmentModel);

  EquipmentModel.$inject = ['pouchDB', 'ConfigService'];

  /**
   * @desc EquipmentModel
   *
   */
  function EquipmentModel(pouchDB, ConfigService) {
    var db = pouchDB('equipment');
    ConfigService.getConfig().then(function(config){
      if (config.live.status) {
         db.sync(config.live.url + '/equipment', { live: true, retry: true}).on('error', console.log.bind(console));;
      }
    });

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
      return db.get(id).then(function (item) {
        return self.load(item);
      });
    }

    function save() {
      if (this._id) {
        this._id = new Date().toJSON();
      }
      var item = JSON.parse(JSON.stringify(this));
      return db.put(item)
        .catch(function (err) {
          console.log(err);
        });
    }

    function remove() {
      return db.remove(this);
    }
  }
})();
