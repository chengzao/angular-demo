(function(angular) {
    //
    angular.module('moviecat.movie_detail', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/details/:id', {
                controller: 'movieController',
                templateUrl: 'movie_detail/view.html'
            })
        }])
        .controller('movieController', ['$scope', '$location',
            '$routeParams',
            'MyHttp',
            function($scope, $location, $routeParams, MyHttp) {

                MyHttp.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {}, function(data) {
                    // console.log(data);
                    $scope.data = data;
                    $scope.$apply(); // 获取异步更新
                })
            }
        ]);
})(angular)