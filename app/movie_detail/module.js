(function(angular) {
    // 创建模块
    var app = angular.module('moviecat.detail', [
        'ngRoute', 'moviecat.services.http'
    ]);

    // 路由配置
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:id', {
            controller: 'detailController',
            templateUrl: 'movie_detail/view.html'
        });
    }]);

    // 创建控制器
    app.controller('detailController', [
        '$scope',
        '$routeParams',
        'HttpService',
        function($scope, $routeParams, HttpService) {
            // httpService
            
            HttpService.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {},
                function(data) {
                    $scope.movie=data;
                    $scope.$apply();
                });
        }
    ]);
})(angular)
