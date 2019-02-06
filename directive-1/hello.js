var myApp = angular.module('app',[])
myApp.directive('hello',function(){
	return {
		restrict:'AEMC',
		template:'<div>hello angular</div>',
		replace:true
	}
})