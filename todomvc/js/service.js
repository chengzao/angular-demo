(function(angular) {
  //获取模块对象
  var app = angular.module("myApp");

  app.service("MyService", [
    "$window",
    function($window) {
      var storage = $window.localStorage;
      // 获取数据
      var str = storage.getItem("todos");
      // 转化为json
      var tasks = JSON.parse(str || "[]");
      // 暴露数据
      this.get = function() {
        return tasks;
      };
      // 添加
      this.add = function(newTasks) {
        var newId = 1;
        if (tasks.length > 0) {
          newId = tasks[tasks.length - 1].id + 1;
        }
        tasks.push({
          id: newId,
          name: newTasks,
          completed: false
        });
        this.save();
      };
      // 移除inde
      this.remove = function(id) {
        for (var i = 0; i < tasks.length; i++) {
          var item = tasks[i];
          if (item.id == id) {
            tasks.splice(i, 1);
            this.save();
            return;
          }
        }
      };
      // 保存
      this.save = function() {
        storage.setItem("todos", JSON.stringify(tasks));
      };
      // 批量转换
      this.toggleAll = function(now) {
        for (var i = 0; i < tasks.length; i++) {
          var item = tasks[i];
          item.completed = now;
        }
        this.save();
      };
      // 未完成任务
      this.unCompleted = function() {
        var leftItem = 0;
        for (var i = 0; i < tasks.length; i++) {
          var item = tasks[i];
          if (!item.completed) {
            leftItem++;
          }
        }
        return leftItem;
      };
      // 清除已完成任务
      this.clearCompleted = function(ScopeTask) {
        var temp = [];
        tasks.forEach(function(item) {
          if (!item.completed) {
            temp.push(item);
          }
        });

        tasks = temp;
        this.save();
      };
      // 是否有完成任务 ： 显示按钮
      this.hasCompleted = function() {
        for (var i = 0; i < tasks.length; i++) {
          var item = tasks[i];
          if (item.completed) {
            return true;
          }
        }
        return false;
      };
    }
  ]);
})(angular);
