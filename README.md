#ng-weui

使用Angularjs框架代替zepto.js封装weui

###引用文件

+ 使用angular.js
+ 使用angular-route.js
+ 使用angular-animate.min.js(动画暂未实现，可不引用)
+ 使用weui.min.css

###使用控件所需js
+directiveControllers.js
+directives.js
+directiveServices.js

###正在进行

+ 使用文档



###bug说明
+ actionsheet必须设置action-list属性，不能去掉该属性而通过方法添加action。
+ actionsheet删除action是通过name删除，name相同则只会删除一个。

