var myApp = angular.module('app',[],function($provide){
	console.log('1');
	// 自定义服务
	$provide.factory('CustomService',function(){
		return [1,2,3];


/*		return {
			message : 'CustomService Message'
		}*/


		
	})
});

myApp.controller('ctrl',['$scope','CustomService',function($scope,CustomService){
	console.log('2');
	$scope.name = '小明';
	console.log(CustomService)
}]);