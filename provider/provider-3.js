var app = angular.module("myApp", []);
app.config(function (myFirstProvider) {
  myFirstProvider.name = "zhangsan";
});
app.provider("myFirst", function () {
  this.$get = function () {
    var that = this;
    var service = {};
    service.console = function () {
      return that.name;
    }
    return service;
  }
});
app.controller("CartController", ["myFirst", "$scope", function (a, b) {
  console.log(a.console());
  b.name = "lisi";
}]);
