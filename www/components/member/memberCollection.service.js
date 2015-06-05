(function () {
  'use strict';

  angular
    .module('member')
    .factory('MemberCollection', MemberCollection);

  MemberCollection.$inject = ['pouchDB', 'MemberModel'];

  /**
   * @desc EquipmentCollection
   *
   */
  function MemberCollection(pouchDB, MaterialModel) {
    var db = pouchDB('member');

    var service = {
      load: loadData,
      push: pushModel,
      removeOne: removeModel,
      getList: getList
    };

    return service;

    function loadData(collection) {
      angular.forEach(collection.rows, function(obj, idx) {
        collection.rows[idx] = MaterialModel.load(obj);
      });
      return angular.extend(collection, this);
    }

    function getList(filters) {
      var self = this;
      if (angular.isUndefined(filters)) {
        return db.allDocs({
          include_docs: true,
          descending: true
        }).then(function(docs) {
          return self.load(docs);
        });
      } else {
        return db.query(filters);
      }
    }

    function pushModel(obj) {
      this.rows.push(obj);
    }

    function removeModel(index) {
      var self = this;
      this.rows[index].remove().then(function(){
        self.rows.splice(index, 1);
      });
    }
  }
})();
