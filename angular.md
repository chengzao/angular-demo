# angular

## 什么是Angular

- 一款非常优秀的前端高级 JS 框架
- 最早由 Misko Hevery 等人创建
- 2009 年被 Google 公式收购，用于其多款产品
- 目前有一个全职的开发团队继续开发和维护这个库
- 有了这一类框架就可以轻松构建 SPA 应用程序
- 其核心就是通过指令扩展了 HTML，通过表达式绑定数据到 HTML。

## 什么是 SPA

- Single Page Applictaion
- 单面应用程序
- 就是一个页面，通过ajax动态的改变页面的内容
- 通过 a 标签对象可以动态的获取Url字符中的内容

## 什么是 MVC 

- 将应用程序的组成划分为三个部分：Model View Controller
- 控制器的作用就是初始化模型用的；
- 模型就是用于存储数据的
- 视图用于展现数据   

## angular指令

```
- ng-app:相当于一个入，告诉angular来管理ng-app指令所在的元素及其子元素。
- ng-controller：指定了一个控制来管理页面的数据模型/行为模型。
- ng-model:主要是用来进行双向数据绑定。
- ng-click:类似于onclick,指定一个方法就能运行。
- ng-init:
- ng-repeat:渲染数组中的元素。
- ng-bind:为了解决表达式闪烁问题；只能使用在有双标签的元素上。
- ng-cloak:利用了anuglar加载后会移动类样式名为ng-cloak的特性。
- ng-bind-html:
- ng-class:
    + 多选一：<div ng-class="{'A':'classA','B':classB}["A"]"></div>
    + 多选多：<div ng-class="{'classA':布尔值,'classB':布尔值}></div>
- ng-show/ng-hide：控制页面元素的显示与否,需要提供一个布尔值。
- ng-if:类似于ng-show,区别是ng-if会彻底删除元素。
- ng-switch:ng-siwtch-when
```

##自定义指令

```
-  template: 
指定了一个字符，最终会被加入自定义指令所有标签的innerHTML位置；
-  templateUrl:
    + 指定了一个文件路径，最终angular会发一个异步请求
      把文件内容加入到自定义指令所在标签的innerHTML位置。
    + 也可以指定一个script标签的id,`templateUrl:'id值'` ,
      会将这个script标签中的内容以字符串的形式加入到页面，
      需要更改script标签中的type属性：type="text/ng-template"

- replace:告诉angular,用template对应的字符串替换自定义指令所在的标签。
- restrict:限制自定义指令的使用方式：
    +'A':attribue :需要以属性的形式书写自定义指令。'<div my-zhiling></div>'
    +'C':class :以类样式名的形式来书指令。   '<div class="my-zhiling"></div>'
    +'E':element:以自定义标签的形式来书写指令 '<my-zhiling></my-zhiling>'
    +'M':comment:以注释的形式来书写指令  <!-- directive: my-zhiling -->
- transclude:需要提供一个布尔，为true会把自定义指令
    所在标签的innerHTML插入到模板中拥有ng-transclude指令的元素的innerHTML位置。
    *注意：不能够与replace共用(指的是transclude为true时，replace不能为true)*
- scope:属性
    + 第一种写法：`scope:{aaa:'@myclass'}` 可以获得自定义指令所在标签中名为myclass的属性值
    + 第二种写法：`scope:{myclass:'@'}` //第一种的简写方式;

- link：这个属性指向的是function(scope,element,attributes),
有三个参数
    +这三个参数名是随便起
    + scope参数，类似于控制器的$scope，
    *注意：只不过这里的scope下的属性值只能用在模板中，
    一定要与控制器中$scope的使用范围区分*
    + element:自定义指令所在标签的jqLite对象
    + attributes:是一个object对象，通过它可以获取所有自定义指令所在标签的指令。
```

## 过滤器(filter)

- date : 格式化显示数据 

```html
    <!-- 需要传递参数告诉它，要按照我们想要的格式去显示
        yyyy 表示年
        MM 表示月
        dd 表示日
        HH 表示小时
        mm 表示分钟,
        ss 表示秒数
         -->
    <p>{{9838232323 | date :'yyyy年MM月dd日 HH:mm:ss'}}</p>
```

- orderBy: 对我们数据进行排序
- 一般和ng-repeat一起使用，第一个参数，是个字符串：
                字符串前加+或什么都不写时，会按照所对应的数据的属性正向排序，加上-就是逆向排序;
`<li  ng-repeat="item in data |orderBy:'+id'"></li>`

- filter : 也需要一个参数
    + 可以传递一个布尔值，或者字符串，angular进根据它对数据进行全局查找
    + 也可以传递一个对象，angular会按照对象的属性到数据中精确查找对应的属性。

## 扩展小知识

- todomvc demo

- track by $index 解决ng-repeat 遍历数组时有重复问题

- 使用$scope.$apply()通过anuglar监视数据模型的变化。
    - setInterval()
    - setTimeout() 
- $route ,提供一个方法，用于更新路由参数 
    + $route.updateParams({page:2})//需要传入一个对象：就路由中的参数名及新的参数值;

- todomvc demo  `http://cxyz.oschina.io/angular-demo/todomvc/#!/ `

- moviecat  `http://cxyz.oschina.io/angular-demo/moviecat/#/home_page`

## ui-router 

- `https://ui-router.github.io/ng1/tutorial/hellosolarsystem`

## url

- [学习AngularJS 1.x gitbook](https://hairui219.gitbooks.io/learning_angular/content/zh/)
- [学习AngularJS 1.x](https://blog.csdn.net/qq_14992199/article/details/70828866)
- [angular docs](http://docs.angularjs.org)
- [AngularJS cn doc](http://www.angularjs.net.cn/tutorial/1.html)
- [dolymood/learning-angular github](https://github.com/dolymood/learning-angular)
- [AngularJS学习笔记](https://www.zouyesheng.com/angular.html)