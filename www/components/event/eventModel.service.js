(function() {

'use strict';

angular.module('event', ['pouchdb']).factory('EventModel', EventModel);

EventModel.$inject = ['pouchDB'];

function EventModel(pouchDB) {
  var db = pouchDB('event');

  // debug info only
  db.info().then(function (info) {
  });
    
  return {
    load: loadData,
    get: getElement,
    save: save,
    remove: remove,
    getDateTime: getDateTime,
    join: join,
    isJoined: isJoined
  };
  
  function join(email) {
    if (!this.isJoined()) {
      this.participants.push(email);
      return this.save(); 
    }
  }
  
  function isJoined(email) {
    return _.includes(this.participants, email);
  }
  
  function getDateTime() {
    if (!this.from) return '';
    var dd = new Date(this.from.date).getDate();
    var mm = new Date(this.from.date).getMonth()+1;
    var yy = new Date(this.from.date).getFullYear();
    var hh = new Date(this.from.time).getHours();
    var ms = new Date(this.from.time).getMinutes();

    return new Date(yy, mm, dd, hh, ms);
  }
  
  function loadData(obj) {
    if (angular.isObject(obj.doc)) {
      obj.doc.participants = [];
      return angular.extend(obj.doc, this);
    }
    obj.participants = [];
    return angular.extend(obj, this);
  }

  function getElement(id) {
    var self = this;
    return db.get(id, {attachments: true}).then(function(item) {
      return self.load(item);
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