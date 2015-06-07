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
      changeStatus: changeStatus
    };

    return service;

    function loadData(item, objRef) {
      if (objRef) {
        item.objRef = objRef;
      }
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
      if (!this._id) {
        var date = this.from.date.toJSON().split('T')[0],
          time = this.from.time.toJSON().split('T')[1]; //toISOString?
        this._id = this.objRef._id + '_' + date + 'T' + time;
        this.status = 'pending';
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

    function changeStatus() {
      this.status = (this.status === 'pending') ? 'approved' : 'pending';
      this.save();
    }
  }
})();
