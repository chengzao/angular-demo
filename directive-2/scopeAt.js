var myApp =  angular.module('app',[]);
myApp.controller('myCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = '百威'
}]);
myApp.directive('drink',function(){
	return {
		restrict:'AE',
		scope:{
			flavor:'@'
		},
		template:'<div>{{flavor}}</div>'
		// link:function(scope,element,attrs){
		// 	scope.flavor = attrs.flavor;
		// }
	}
})
