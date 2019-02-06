(function(angular) {
    //  首页
    //  创建首页模块 
    'use strict';
    var app = angular.module('moviecat.home_page', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize', 
        'ui.bootstrap',
        'moviecat.http_jsonp'
    ]);

    // 配置路由
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home_page', {
            controller: 'home_pageController',
            templateUrl: 'home_page/view.html'
        });
    }]);

    // 创建控制器 
    app.controller('home_pageController',[ '$scope', 'MyHttp', function($scope,MyHttp) {

    // MyHttp  

    $scope.myInterval = 5000;

    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.loading=true;

    MyHttp.jsonp('https://api.douban.com/v2/movie/in_theaters',
      {start:0,count:10},function(data){
        // console.log(data.subjects);
        var imgs = data.subjects;
        $scope.imgs = imgs;
        for (var i = 0; i < 5; i++) {
          slides.push({
            image: imgs[i].images.large,
            url: imgs[i].alt,
            id: currIndex++
          });
        }  
    
    //$scope.$apply();    

    $scope.loading=false;

      });




    }]);
})(angular)
