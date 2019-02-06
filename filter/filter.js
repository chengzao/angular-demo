var myApp  = angular.module('app',[]);
//自定义filter
myApp.filter('filter1',function(){
	return function(item){
		return item + ' 你好 ';
	}
})