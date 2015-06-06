(function () {
  'use strict';

  angular
    .module('booking')
    .factory('BookingModel', BookingModel);

  BookingModel.$inject = ['pouchDB'];

  /**
   * @desc BookingModel
   *
   */
  function BookingModel(pouchDB) {
    var db = pouchDB('booking');

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
