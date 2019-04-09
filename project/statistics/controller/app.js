angular.module('statisticsPc', [
  'mgcrea.ngStrap',
  'ngSanitize',
  'ui.router'
]).run(['$rootScope', function ($rootScope) {
  $rootScope.root_preventRouters = [];//禁止切换路由操作

  // $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
  //     if ($rootScope.root_preventRouters && $rootScope.root_preventRouters.length) {
  //         event.preventDefault();
  //         return;
  //     }
  // });
}])
.config(function ($urlRouterProvider) {
  // Here's an example of how you might allow case insensitive urls
  // Note that this is an example, and you may also use 
  // $urlMatcherFactory.caseInsensitive(true); for a similar result.
  $urlRouterProvider.rule(function ($injector, $location) {
    console.log('$location', $location)
    function checkPlatform() {
      var utils = {};
      var isBudge = function () {//手持设备：ipad、iphone、android、ipod
        return /mobile/i.test(navigator.userAgent);
      }()
      var isMac = function () {
        return /macintosh/i.test(navigator.userAgent);
      }();
      var isWindows = function () {
        return /windows nt/i.test(navigator.userAgent);
      }();
      var isLinux = function () {
        return /linux/i.test(navigator.userAgent);
      }();
      var isIpad = function () {
        return /ipad/i.test(navigator.userAgent);
      }()
      utils.isMobile = !(isWindows || isMac || (isLinux && !isBudge) || isIpad);
      return utils;
    }

    var _checkPlatform = checkPlatform()
    if(_checkPlatform.isMobile){
      $location.replace().path('/route1/list')
    }else{
      $location.replace().path('/route2/list')
    }

    // because we've returned nothing, no state change occurs
  });
})
.factory("httpInterceptor", ['$q', function ($q) {
  return {
    'requestError': function (rejection) {
      return true;
    },
    'responseError': function (rejection) {
      if (rejection.status == 401) {
        alert('身份验证失败');
      }
      if (rejection.status == 500) {
        alert('服务器错误')
      }
      return $q.reject(rejection);
    }
  };
}]).factory('noCacheInterceptor', function () {
  return {
    request: function (config) {
      if (config.method == 'GET') {
        var separator = config.url.indexOf('?') === -1 ? '?' : '&';
        config.url = config.url + separator + 'noCache=' + new Date().getTime();
      }
      return config;
    }
  };
})