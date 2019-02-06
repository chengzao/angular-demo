var myApp =  angular.module('app',[]);
myApp.controller('ctrl', ['$scope', function($scope){
	$scope.cart = [
		{
			id:1,
			name:'xiaomi',
			quantity:2,
			price:1200
		},
		{
			id:2,
			name:'meizu',
			quantity:1,
			price:1300
		},
		{
			id:3,
			name:'huawei',
			quantity:3,
			price:1400
		},
		{
			id:4,
			name:'iphone',
			quantity:2,
			price:5600
		},						
	];
	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += parseInt(item.quantity)*item.price;
		})
		return total;
	}

	$scope.totalQuantity = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += parseInt(item.quantity);
		})
		return total;
	}

	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(item.id === id){
				index = key;
			}
		})
		return index;
	}

	$scope.remove = function(id){
		var index = findIndex(id);
		if(index !== -1){
			$scope.cart.splice(index,1);
		}
	}

	$scope.removeAll = function(){
		$scope.cart = {};
	}	


	$scope.add = function(id){
		var index = findIndex(id);
		if(index !== -1){
			++$scope.cart[index].quantity; 
		}
	}

	$scope.reduce = function(id){
		var index  = findIndex(id);
		if(index !== -1){
			var item = $scope.cart[index];
			if(item.quantity > 1){
				--item.quantity; 
			}else{
				var returnKey = confirm('是否移除？');
				if(returnKey){
					$scope.remove(id);	
				}
			}
			
		}
	}

}])