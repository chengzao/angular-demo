var myApp = angular.module('app',[]);
myApp.directive('superman',function(){
	return {
		scope:{},
		restrict:'AE',
		controller:function($scope){
			$scope.abilities=[];
			this.addStrength=function(){
				$scope.abilities.push('strength');
			};
			this.addSpeed=function(){
				$scope.abilities.push('speed');
			};
			this.addLight = function(){
				$scope.abilities.push('light');
			}
		},
		link:function(scope,element,attrs){
			element.addClass('btn btn-primary');
			element.bind('mouseenter',function(){
				console.log(scope.abilities);
			})
		}
	}
});
myApp.directive('strength',function(){
	return {
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addStrength();
		}
	}
});
myApp.directive('speed',function(){
	return {
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addSpeed();
		}
	}
});

myApp.directive('light',function(){
	return {
		require:'^superman',
		link:function(scope,element,attrs,supermanCtrl){
			supermanCtrl.addLight();
		}
	}
});