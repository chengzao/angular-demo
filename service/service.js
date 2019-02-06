var myApp = angular.module('app',[]);
myApp.service('HelloAngular',function(){
	this.name = 'xiaowang';
	this.getName = function(){
		return this.name;
	}
})

myApp.controller('myCtrl', ['$scope','HelloAngular', function($scope,HelloAngular){
	$scope.name = HelloAngular.getName();
}])