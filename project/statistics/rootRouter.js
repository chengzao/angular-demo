'use strict';

angular.module('statisticsPc').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when('/route1', '/route1/list')
        .when('/route2', '/route2/list')
        .otherwise('/route1');
    $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "view/route1.html"
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "tpl/route1.list.html",
            controller: 'route1Ctrl'
        })

        .state('route2', {
            url: "/route2",
            templateUrl: "view/route2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "tpl/route2.list.html",
            controller: 'route2Ctrl'
        })

}]);
