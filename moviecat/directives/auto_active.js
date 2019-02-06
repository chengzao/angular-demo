(function(angular) {
    //创建模块
    var app = angular.module('moviecat.auto_active', []);
    //创建自定义指令
    app.directive('autoActive', ['$location', function($location) {
        return {
            link: function(scope, element, attributes) {
                scope.loca = $location;
                scope.$watch('loca.url()', function(now, old) {
                    var a = element.children();
                    var hash = a[0].hash.substr(1);
                    if (now.startsWith(hash)) {
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                });
            }
        };
    }]);
})(angular);