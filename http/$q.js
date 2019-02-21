var HttpREST = angular.module('Async', []);
HttpREST.controller('promise', function ($q, $http) {
  function asyncGreet(name) {
    // 通过$q.defer()创建一个deferred延迟对象，
    // 在创建一个deferred实例时，也会创建出来一个派生的promise对象，
    // 使用deferred.promise就可以检索到派生的promise。
    // deferred: resolve reject notify
    var deferred = $q.defer();
    deferred.notify('About to greet ' + name + '.');  //延迟对象的notify方法。
    $http.get('https://api.github.com/users/' + name).then(function (result) {
      deferred.resolve(result)
    }, function (error) {
      deferred.reject(error)
    })
    return deferred.promise;  //返回deferred实例的promise对象
  }

  var promise = asyncGreet('chengzao');  //获得promise对象
  // promise对象的then函数会获得当前任务也就是当前deferred延迟实例的执行状态。
  // 它的三个回调函数分别会在resolve(), reject() 和notify()时被执行
  // then all catch finally
  promise.then(function (data) {
    console.log('Success: ', data);
  }, function (fail) {
    console.log('Failed: ', fail);
  }, function (update) {
    console.log('Got notification: ', update);
  }).catch(function(error){
    console.log('error', error)
  }).finally(function(){
    console.log('exec finally code')
  });
});
