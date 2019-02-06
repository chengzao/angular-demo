var myApp = angular.module('app',[]);
myApp.directive('hello',function(){
	return {
		restrct:'AE',
		transclude:true,
		template:'<div>hello angular! <div ng-transclude></div></div>'
	}
})