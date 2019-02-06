var myApp = angular.module('app',[]);

myApp.provider('HelloAngular',function(){
	return {
		$get:function(){
			var name = 'xiaowang';
			function getName(){
				return name;
			}
			return {
				getName:getName
			}
		}
	}
})

myApp.controller('myCtrl', ['$scope','HelloAngular', function($scope,HelloAngular){
	$scope.name = HelloAngular.getName();
}])
