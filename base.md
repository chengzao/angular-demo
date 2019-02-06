# angular

- 描述：ng-?指令表示angular框架对元素的操作，常见的有如下几种：

```js
ng-app:定义应用程序的根元素,若不为""时需在js脚本中初始化。
ng-bind:把应用程序变量绑定到某个元素的 innerHTML。
ng-controller:定义应用的控制器对象，可以控制的服务有$scope,$rootScope,$location,$http,$timeout,$interval,其中$scope.$watch('lastName', function() {)); 可以监控变量的变化

ng-init:定义应用的初始化值,一般为angular变量值

ng-hide:隐藏或显示 HTML 元素
ng-show:显示或隐藏 HTML 元素

ng-href:为<a>元素指定链接

ng-if:如果条件为 false 移除 HTML 元素
ng-repeat:定义集合中每项数据的模板,该参数还常与ng-click、ng-class配合使用
ng-switch:规定显示或隐藏子元素的条件。常与ng-switch-when配合使用，类似于switch和case

ng-include:在应用中包含 HTML 文件，如<div ng-include="'myFile.htm'"></div>,但不能执行js代码

*ng-non-bindable:规定元素或子元素不能绑定数据,如<p ng-non-bindable>不使用 AngularJS: {{ 5+5 }}</p>显示的是“5+5”而不是“10”

*ng-open:指定元素的 open 属性,可设值为true|false,常与details等具展开效果的元素配合使用
	<details ng-open=true>
		<summary>学的不仅是技术，更是梦想！</summary>
		<p> - 菜鸟教程</p>
	</details>

ng-src:指定 <img> 元素的 src 属性
*ng-srcset:指定 <img> 元素的 srcset 属性。H5的新属性，允许输入多张图片地址以匹配不同w像素值宽度的容器
	<img ng-src="source.jpg" width="100%" ng-srcset="source_400.jpg 400w, source_600.jpg 600w, source_1280.jpg 1280w">
```

- 事件

```js
ng-copy:用户触发拷贝事件时，规定拷贝事件的行为
ng-cut:用户触发剪切事件时，规定剪切事件的行为
ng-paste:用户触发粘贴事件时，规定粘贴事件的行为

ng-click:规定click 事件的行为
ng-dblclick:用户触发双击事件时，规定双击事件的行为

ng-blur:规定 blur 事件的行为
ng-focus:规定focus焦点事件的行为

ng-keydown:规定按下按键事件的行为
ng-keypress:规定按下按键事件的行为,通常情况下会用ng-keydown
ng-keyup:规定松开按键事件的行为

ng-mousedown:规定按下鼠标按键时的行为
ng-mouseenter:规定鼠标指针穿过元素时的行为
ng-mouseleave:规定鼠标指针离开元素时的行为
ng-mousemove:规定鼠标指针在指定的元素中移动时的行为
ng-mouseover:规定鼠标指针位于元素上方时的行为
ng-mouseup:规定当在元素上松开鼠标按钮时的行为
```

- 样式

```js
ng-class:指定 HTML 元素使用的 CSS 类
ng-class-even:类似 ng-class，但只在偶数行起作用,常用table/tr/td、ul/li等元素配合使用
ng-class-odd:类似 ng-class，但只在奇数行起作用

ng-style:指定元素的 style 属性,可在控制器中为ng-style所在变量赋值

*ng-cloak:在应用正要加载时防止其闪烁。如<p ng-cloak>{{ 5 + 5 }}</p>
```

- from表单

```js
ng-submit:规定submit 事件的行为
ng-value:规定 input 元素的值
ng-model:绑定 HTML 控制器的值到应用数据,即angular变量值,变量值可以是字符串、对象甚至是对象属性

ng-selected:指定元素的 selected 属性,表示当前选择项,常需与select元素配合使用，类似于ng-checked
ng-readonly:指定元素的 readonly 属性

ng-disabled:可设为true|false时，规定一个元素是否被禁用,但不会隐藏

ng-change:规定在内容改变时要执行的表达式
ng-checked:用于设置复选框(checkbox)或单选按钮(radio)的 checked 属性

*ng-list:输出时将文本转换为列表 (数组)，输入文本时用逗号隔开
	<input ng-model="customers" ng-list/>
	<pre>{{customers}}</pre>

*ng-model-options:规定如何更新模型,option	指定了绑定数据的规则，规则如下:
	{updateOn: 'event'}规则指定事件发生后绑定数据,如ng-model-options="{updateOn: 'blur'}"
	{debounce : 1000} 规定等待多少毫秒后绑定数据
	{allowInvalid : true|false} 规定是否需要验证后绑定数据
	{getterSetter : true|false} 规定是否作为 getters/setters 绑定到模型
	{timezone : '0100'} 规则是否使用时区	

ng-options:在 <select> 下拉列中指定 <options>,如<select ng-model="selectedName" ng-options="item for item in names"></select>
	数据格式为字符串数组["",""] 使用x for x in names
	数据格式为单独的对象{"a":1,"b":2} 使用x for (x,y) in names
	数据格式为对象数组[{},{}] 使用x.attr for x in names	

<option ng-repeat="x in address">{{x}}</option>	
```

- angualr方法

```js
angular.isArray()	如果引用的是数组返回 true
angular.isDate()	如果引用的是日期返回 true
angular.isDefined()	如果引用的已定义返回 true
angular.isElement()	如果引用的是 DOM 元素返回 true
angular.isFunction()	如果引用的是函数返回 true
angular.isNumber()	如果引用的是数字返回 true,如果输入框是input标签，要检测输入框内容是否为数字，则使用!isNaN($scope.myInput);
angular.isObject()	如果引用的是对象返回 true
angular.isString()	如果引用的是字符串返回 true
angular.isUndefined()	如果引用的未定义返回 true
angular.equals(a,b)	如果两个对象相等返回 true

*angular.fromJson()	反序列化 JSON 字符串
*angular.toJson()	序列化 JSON 字符串

angular.lowercase()	将字符串转换为小写
angular.uppercase()	将字符串转换为大写

angular.copy()	数组或对象深度拷贝

*angular.forEach()	对象或数组的迭代函数
/*
var objs = [{a: 1}, {a: 2}];
angular.forEach(objs, function(data, index, array) {
	//data等价于array[index]
	console.log(data.a + '=' + array[index].a);
});

var objs = {"a":1,"b":2}
angular.forEach(objs, function(data, index, array) {
	//1 "a" {a: 1, b: 2}
	console.log(data,index,array);
});
*/
```