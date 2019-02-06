var myApp = angular.module('app',[]);

myApp.factory('game',function(){
	return {
		name:'xiaoming'
	}
})

myApp.controller('myCtrl', ['$scope','$injector', function($scope,$injector){
	$injector.invoke(function(game){
		$scope.name = game.name
	})
	//console.log($injector);
}])
