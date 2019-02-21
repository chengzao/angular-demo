var myApp = angular.module('app',[])
myApp.directive('hello',function(){
	return {
		restrict:'AEMC',
		template:'<div>hello angular</div>',
		replace:true
	}
})
myApp.directive('hello2', function () {
  return {
    restrict: 'AE',
    scope: {},
    template: "<div><input type='text' ng-model='name'>{{name}}</div>",
    repalce: true
  }
});
