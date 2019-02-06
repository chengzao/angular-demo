(function(angular) {
    // 创建模块
    var app = angular.module('moviecat.http_jsonp', []);
    // 创建服务
    app.service('MyHttp', ['$window', function($window) {
        this.jsonp = function(url, arg, fn) {
            // 拼接地址 : ?start=0&count=3
            var queryString = '';
            for (var key in arg) {
                queryString += key + '=' + arg[key] + '&'
            }
            url += '?' + queryString;
            var callbackName = "jsonp_" + Math.random().toString().substr(2);
            $window[callbackName] = function(data) {
                fn(data);
                $window.document.body.removeChild(scriptElement);
            };
            url += "callback=" + callbackName;
            //创建script标签，并且把拼接后的url放到script标签的src上。
            var scriptElement = $window.document.createElement('script');
            scriptElement.src = url;
            $window.document.body.appendChild(scriptElement);
        }
    }]);

})(angular)