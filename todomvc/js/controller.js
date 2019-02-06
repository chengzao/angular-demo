(function(angular){
    var app =angular.module('myApp');
    // 配置路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/:status',{
            controller:'todoController',
            templateUrl:'tmpl'
        }).when('/',{
            controller:'todoController',
            templateUrl:'tmpl'
        });
    }]);
    // 展示      
    app.controller('todoController',[
        '$scope',
        '$location',
        '$window',
        '$routeParams',
        'MyService',
        function ($scope,$location,$window,$routeParams,MyService) {
        // 获取localStorage数据
        $scope.tasks = MyService.get();
        // 清空
        $scope.newTasks='';
        // 添加
        $scope.add=function(){
            if(!$scope.newTasks){return;}
            MyService.add($scope.newTasks);                
            $scope.newTasks='';
        }
        // 移除
        $scope.remove=MyService.remove;
        // 编辑
        $scope.isEditingId=-1;
        $scope.edit=function(id){
            $scope.isEditingId=id; // 界面逻辑
        }
        // 保存
        $scope.save=function(){
            $scope.isEditingId=-1; // 界面逻辑
            MyService.save();
        }
        //批量切换任务状态         
        var now=true;//相当于一个开关
        $scope.toggleAll=function(){
            MyService.toggleAll(now);
            now=!now;
        }
        // 监视未完成任务
        $scope.$watch('tasks',function(now,old){                
            $scope.leftItem=MyService.unCompleted();     
            MyService.save();  //保存数据

        },true);
        // 清除所有已完成任务
        $scope.clearCompleted=function(){ 
            // 根据
            //tasks == $scope.tasks               
            MyService.clearCompleted($scope.tasks);
            // 再次获取数据更新
            $scope.tasks=MyService.get();

        };
        // 是否有已完成任务 : 显示按钮
        $scope.isShow=function(){
            return MyService.hasCompleted();
        }
        // 监视锚点变化
        $scope.loca=$location;
        // // console.log($location);
        $scope.$watch('loca.url()',function(now,old){
            switch(now){
            case '/#%2Factive':
                $scope.isComplete={completed:false};
            break;
            case '/#%2Fcompleted':
                $scope.isComplete={completed:true};
            break;
            default:
                $scope.isComplete={};
            break;
        }
        });
    }]);
})(angular);