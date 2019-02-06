/**
 * Created by isc on 3/29/2016.
 */
(function (angular) {
    "use strict";

    //1.创建首页模块
    var app=angular.module('moviecat.home_page',['ngRoute']);

    //2.配置路由参数
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            controller:'homePageController',
            templateUrl:'home_page/view.html'
        });
    }]);

    //3.创建控制器
    app.controller('homePageController',['$scope',function($scope){
        console.log('home_page');
    }]);
})(angular)
