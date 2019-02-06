var myApp = angular.module('app',[]);
myApp.directive('hello',function(){
	return {
		restrict:'AE',
		scope:{},
		template:"<div><input type='text' ng-model='name'>{{name}}</div>",
		repalce:true
	}
});