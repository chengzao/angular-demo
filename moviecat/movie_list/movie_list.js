(function(angular){

    var app = angular.module('moviecat.movie_list',[
      'ngRoute',
      'moviecat.http_jsonp'
      ]);

    // 配置路由
    app.config(['$routeProvider',function($routeProvider){
    	//
        $routeProvider.when('/:movietype/:page?',{
            controller:'movie_listController',
            templateUrl:'movie_list/view.html'
        });
    }]);

    // 创建控制器
    app.controller('movie_listController',[
      '$scope',
      '$http',
      '$routeParams',
      '$route',
      'MyHttp',function($scope,$http,$routeParams,$route,MyHttp){
        // console.log($routeParams);
        var pageSize=15;/// 每页显示多少条数据
        $scope.page =($routeParams.page-0)||1;// 拿到想显示第几页数据。
        var start = ($scope.page-1)*pageSize;// 从第几条数据开始显示
        $scope.allCount= 0; //总共多少条数据;
        $scope.loading=true;
        MyHttp.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movietype+'?q='+$routeParams.q,
          {start:start,count:pageSize},function(data){
              // console.log(data);
              $scope.list=data.subjects;
              $scope.allCount=data.total;
              // 总共多少页
              $scope.allPage =Math.ceil($scope.allCount/pageSize);
              // loading
              $scope.loading=false;
              // angular无法监视异步操作中对数据模型的改;
              $scope.$apply();
          });
          $scope.getPage=function(newPage){
              // 不允许请求小于第1页，或大于最大页。
              if(newPage<1||newPage>$scope.allPage){
                return;
              }
              //更新路由中的参数,需要传入一个object对，会把整个控制器再执行一遍.
              $route.updateParams({page:newPage});
          }
  }]);
})(angular);