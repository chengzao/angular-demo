var myApp = angular.module('app',[])
myApp.directive('hello',function(){
	return {
		restrict:'AEMC',
		templateUrl:'tmpl.html',
		replace:true
	}
})

myApp.directive('helloDemo',function(){
	return {
		restrict:'AE',
		templateUrl:'tmpl2',
		replace:true
	}
})
// templateUrl  template :
// 模版中需要有html标签包裹 ： <div>haha...</div>

// templateUrl:'tmpl',
// <script type='text/ng-template' id='tmpl'>
//	  <div>haha...</div>
// </script>	
