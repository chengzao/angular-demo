angular.module('myApp',[])
	   .controller('MainController', ['$scope', function($scope){
	   		$scope.userdata={};
	   		$scope.submitForm=function(){
	   			console.log($scope.userdata);
	   		}

	   }])
	   .directive('compare',function(){
	   	  var o={};
	   	  o.restrict = 'AE';
	   	  o.scope={
	   	  	orgText:'=compare'
	   	  }
	   	  o.require='ngModel';
	   	  o.link=function(sco,ele,attr,con){
	   	  	con.$validators.compare = function(v){
	   	  		return v == sco.orgText;
	   	  	}
	   	  	sco.$watch('orgText',function(){
	   	  		con.$validate();
	   	  	})
	   	  }
	   	  return o;
	   })