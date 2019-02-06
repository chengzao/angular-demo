var myApp = angular.module('app',[]);
myApp.directive('aloohello',function(){
	return {
		restrict:'A',
		compile:function(ele,attrs,transclude){
			console.log('compile...');
			var tpl = ele.children().clone();
			for(var i = 0;i<attrs.aloohello-1;i++){
				ele.append(tpl.clone());
			}
			return function(scope,ele,attrs,controller){
				console.log('compile2....');
			}
		},
		// compile 与 link 最好不要同时出现
		// 同时出现 link 无效
		link:function(scope,ele,attrs,controller){
			console.log('link....')
		}
	}
})