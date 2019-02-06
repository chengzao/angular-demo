(function(angular) {
    'use sctrict';
    // 创建模块
    var app = angular.module('moviecat.directives.auto-active', []);
    // 创建自定义指令 auto-active
    app.directive('autoActive', ['$location', function($location) {
        return {
            // 当指令作用某个元素后，触发一次
            link: function(scope, element, attributes) {
                var hash = $location.url();

                // 在初始加载时，不能获取焦点。
                // element.on('click',function(){
                //    element.parent().children().removeClass('active');
                //    element.addClass('active');
                // });                
                scope.location = $location;
                scope.$watch('location.url()', function(now, old) {
                    // 判断url锚点是不是a链接开头
                    var aLink = element.children().attr('href').substr(1);
                    if (now.startsWith(aLink)) {
                        element.parent().children().removeClass(attributes.autoActive);
                        element.addClass(attributes.autoActive);
                    }

                });
                // scope.$location = $location;
                // scope.$watch('$location.url()', function(now, old) {
                //     // /in_theaters
                //     var aLink = element.children().attr('href').substr(1);
                //     if (now.startsWith(aLink)) {
                //         // 干掉兄弟节点上active
                //         element.parent().children().removeClass(attributes.autoActive);
                //         // 给当前元素加上active样式
                //         element.addClass(attributes.autoActive);
                //     }
                // });
            }
        }
    }]);
})(angular);
