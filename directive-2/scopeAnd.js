var myApp =  angular.module('app',[]);
myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.sayHello = function(name){
		console.log('hello ,' + name)		
	}
}]);
myApp.directive('greeting',function(){
	return {
		restrict:'AE',
		scope:{
			greet:"&"
		},
		template:"<input type='text' ng-model='userName'>"+"<button ng-click='greet({name:userName})'>Greet</button>"
		
	}
})
