/**
 * Created by GAMELoft9 on 2016/8/3.
 * @author GAMELoft9
 * 用AngularJS替代zepto.js实现weiui。
 * 创建Angular指令封装weiui部分控件，包括ActionSheet、Dialog、Progress、SearchBar、Toast。
 * 其余控件为纯HTML+CSS，不需要用AngularJS覆写。
 */

/**
* SearchBar指令
* */
ctrls.directive("mySearchBar",function(){
    return {//在这里定义指令
        restrict:"E",
        scope:{//隔离作用域
           searchHandler:'&'//绑定搜索函数
        },
        templateUrl:"./template/searchbar.html",
        controller:"SearchBarController"
    };
});
/**
 * ActionSheet指令
 * */
ctrls.directive("myActionSheet", function () {
        return{
            restrict:"E",
            scope:{//隔离作用域
                actionList:'='
            },
            templateUrl:"./template/actionsheet.html",
            controller:"ActionSheetController"
        };
});
/**
 * DialogOkCancle指令
 * */
ctrls.directive("myDialogOkCancle", function () {
    return{
        restrict:"E",
        scope:{//隔离作用域
            title:'@',//绑定字符串,对话框标题
            content:'@'//对话框内容
        },
        templateUrl:"./template/dialogokcancle.html",
        controller:"DialogOkCancleController"
    };
});
/**
 * DialogOk指令
 * */
ctrls.directive("myDialogOk", function () {
    return{
        restrict:"E",
        scope:{//隔离作用域
            title:'@',//绑定字符串
            content:'@'
        },
        templateUrl:"./template/dialogok.html",
        controller:"DialogOkController"
    };
});
/**
 * Progress指令
 * */
ctrls.directive("myProgress", function () {
    return{
        restrict:"E",
        templateUrl:"./template/progress.html",
        controller:"ProgressController"
    };
});
/**
 * Toast指令
 * */
ctrls.directive("myToast", function () {
    return{
        restrict:"E",
        templateUrl:"./template/toast.html",
        controller:"ToastController"
    };
});
/**
 * LoadingToast指令
 * */
ctrls.directive("myLoadingToast", function () {
    return{
        restrict:"E",
        templateUrl:"./template/loadingtoast.html",
        controller:"LoadingToastController"
    };
});
