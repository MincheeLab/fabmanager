angular.module('equipments')

.controller('EquipmentFormCtrl', function($scope, pouchDB) {
console.log('EquipmentFormCtrl');
var db = new pouchDB('dbname');
$scope.equipment = {};
  $scope.save = function(equipment) {
    console.log(equipment);
  }

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

//db.allDocs().then(function(docs){
//console.log(docs);
//$scope.equipments = docs.rows;
//});

//db.changes().on('change', function() {
//  console.log('Ch-Ch-Changes');
//});

});
