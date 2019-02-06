/**
 * Created by isc on 3/29/2016.
 */
(function () {
    "use strict";
    //1.创建正在热映模块
    var app = angular.module('moviecat.list', [
        'ngRoute',
        'moviecat.services.http']);

    //2.配置模块的路由
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page?', {
                controller: 'movie_listController',
                templateUrl: 'movie_list/view.html'
            }
        );
    }]);



    //3.创建控制器
    app.controller('movie_listController', [
        '$scope',
        '$routeParams',
        '$route',
        'HttpService',
        function($scope,$routeParams,$route,HttpService){
            //console.log(HttpService);
            
            console.log($routeParams);
            // 加载动画
            $scope.loading=true;

            // 当前页数
            $scope.page=($routeParams.page - 0)||1;

            // 每页多少条
            $scope.pageSize=15;

            // 总共多少条数据
            $scope.total=0;

            // 总共多少页 
            $scope.totalPage=0

            // 请求当前所在页的数据
          console.log($routeParams.category)
            HttpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.category,
                {
                    start:($scope.page -1)*$scope.pageSize,
                    count:$scope.pageSize,
                    q:$routeParams.q
                },function(data){
                   $scope.list=data;
                   $scope.loading=false;
                   $scope.total=data.total;
                   $scope.totalPage=Math.ceil($scope.total/$scope.pageSize);
                   $scope.$apply();// 强制同步数据到视图
                  console.log($scope.list);
                });

            // 分页之 上一页，下一页
            $scope.goPage=function(newPage){
                if(newPage<1||newPage>$scope.totalPage){
                    return;
                }
                console.log($scope.page);
                $scope.page=newPage;
                console.log($scope.page);
                $route.updateParams({page:$scope.page});
            }
        }]);
})();