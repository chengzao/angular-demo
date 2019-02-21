var product = angular.module('product',[])

.service('ProductData',function(){
	return [
		{
			id:1,
			name:'xiaomi',
			price:1200
		},
		{
			id:2,
			name:'meizu',
			price:1300
		},
		{
			id:3,
			name:'huawei',
			price:1400
		},
		{
			id:4,
			name:'iphone',
			price:5600
		}				

	]
})
.controller('productCtrl',['$scope','ProductData',function($scope,ProductData){
	$scope.ProductData = ProductData;
	$scope.orderType  = 'id';
	$scope.order = '-';

	$scope.changeOrder = function(type){
		$scope.orderType = type;

		if($scope.order == ''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	}

}])