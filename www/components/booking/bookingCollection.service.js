(function () {
  'use strict';

  angular
    .module('booking', ['pouchdb'])
    .factory('BookingCollection', BookingCollection);

  BookingCollection.$inject = ['pouchDB', 'BookingModel'];

  /**
   * @desc BookingCollection
   *
   */
  function BookingCollection(pouchDB, BookingModel) {
    var db = pouchDB('booking');

    var service = {
      load: loadData,
      getBookings: getBookings
    };

    return service;

    function loadData(collection) {
      angular.forEach(collection.rows, function (obj, idx) {
        collection.rows[idx] = BookingModel.load(obj);
      });
      return angular.extend(collection, this);
    }

    function getBookings(item) {
      var self = this;
      self.objRef = item;
      return db.allDocs({
        include_docs: true,
        startkey: item._id + '_' + new Date().toJSON()
      }).then(function(docs) {
        return self.load(docs);
      });
    }
  }
})();
