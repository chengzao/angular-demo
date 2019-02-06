var myApp = angular.module('app',[]);
myApp.directive('hello',function(){
	return {
		restrict:'AE',
		template:'<div>hello angular</div>',
		repalce:true,
		link:function(scope,element,attrs,controller){
			element.on('mouseenter',function(){
				console.log('mouseenter..')
			})
		}
	}
})