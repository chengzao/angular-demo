(function(angular){
    var app =angular.module('myApp');
    app.directive('autoFocus',[function(){
        return {
            link:function(scope,element,attributes){
                // 注册点击事件
                element.on('dblclick',function(){
                    var jQLi=angular.element(this);
                    // console.log(jQLi);
                    var input=jQLi.find('input')[1];
                    input.focus();
                });
            }
        };
    }])
})(angular)