angular.module('equipments', [])

.controller('EquipmentsCtrl', function($scope, pouchDB) {
console.log('EquipmentCtrls');
var db = new pouchDB('dbname');

//db.put({
//  _id: 'marco@gmail.com',
//  name: 'MM',
//  age: 21
//});
//
//db.post({
//  _id: 'test@gmail.com',
//  name: 'TT',
//  age: 12
//});

db.allDocs().then(function(docs){
console.log(docs);
$scope.equipments = docs.rows;
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});

});
