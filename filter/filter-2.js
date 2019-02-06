var myApp = angular.module('app',[],function($filterProvider,$provide,$controllerProvider){
	$provide.service('Data',function(){
		return [
			{
				name:'zhan san',
				age:30,
				city:'shang hai'
			},
			{
				name:'li si',
				age:24,
				city:'bei jing'
			}
		]
	});

	$filterProvider.register('filterAge',function(){
		return function(obj){
			//console.log(obj)
			var newObj =[];
			angular.forEach(obj,function(o){
				if(o.age>25){
					newObj.push(o);
				}
			})
			return newObj;
		}
	});

	$controllerProvider.register('ctrl',function($scope,Data){
		$scope.data = Data;
	})
});