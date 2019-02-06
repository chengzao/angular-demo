var myAppModule = angular.module("app",[]);

myAppModule.controller("myCtrl",['$scope',function($scope){
    $scope.testname="hello angualr";
}]);

myAppModule.directive("drink",function(){
    return {
        restrict:'AE',
        scope:{
            name:'='
        },
        template:'<input type="text" ng-model="name">',
        repalce:true
    }
})