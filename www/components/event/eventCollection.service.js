(function() {
'use strict';

angular.module('event').factory('EventCollection', EventCollection);

EventCollection.$inject = ['pouchDB', 'EventModel'];

function EventCollection(pouchDB, EventModel) {
  var db = pouchDB('event');
  
  return {
    load: loadData,
    getList: getList
  }
    
  function loadData(collection) {
    angular.forEach(collection.rows, function(obj, idx) {
      collection.rows[idx] = EventModel.load(obj);
    });
    return angular.extend(collection, this);
  }

  function getList(filters) {
    var self = this;
    if (angular.isUndefined(filters)) {
      return db.allDocs({
        include_docs: true,
        descending: true,
        attachments: true
      }).then(function(docs) {
        return self.load(docs);
      });
    } else {
      return db.query(filters);
    }
  }
};

})();