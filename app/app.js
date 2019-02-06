(function (angular) {
    "use strict";

    //1.创建模块,主模块
    var app=angular.module('moviecat',[
        'ngRoute',
        'moviecat.home_page',
        'moviecat.detail',
        'moviecat.list',
        'moviecat.directives.auto-active',
    ]);
    app.config(['$routeProvider',function ($routeProvider){
        $routeProvider.otherwise({
            redirectTo:'/home_page'
        });
    }]);
    // 创建控制器
    app.controller('mainController',[
        '$scope',
        '$location',function($scope,$location){
        $scope.query='';
        // 暴露行为模型
        $scope.search=function(){
            //="/search?q="+$scope.query;
            console.log($location.url('/search?q='+$scope.query));
        }
    }]);
})(angular);