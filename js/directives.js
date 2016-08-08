/**
 * Created by GAMELoft9 on 2016/8/3.
 * @author GAMELoft9
 * ��AngularJS���zepto.jsʵ��weiui��
 * ����Angularָ���װweiui���ֿؼ�������ActionSheet��Dialog��Progress��SearchBar��Toast��
 * ����ؼ�Ϊ��HTML+CSS������Ҫ��AngularJS��д��
 */

/**
* SearchBarָ��
* */
ctrls.directive("mySearchBar",function(){
    return {//�����ﶨ��ָ��
        restrict:"E",
        scope:{//����������
           searchHandler:'&'//����������
        },
        templateUrl:"./template/searchbar.html",
        controller:"SearchBarController"
    };
});
/**
 * ActionSheetָ��
 * */
ctrls.directive("myActionSheet", function () {
        return{
            restrict:"E",
            scope:{//����������
                actionList:'='
            },
            templateUrl:"./template/actionsheet.html",
            controller:"ActionSheetController"
        };
});
/**
 * DialogOkCancleָ��
 * */
ctrls.directive("myDialogOkCancle", function () {
    return{
        restrict:"E",
        scope:{//����������
            title:'@',//���ַ���,�Ի������
            content:'@'//�Ի�������
        },
        templateUrl:"./template/dialogokcancle.html",
        controller:"DialogOkCancleController"
    };
});
/**
 * DialogOkָ��
 * */
ctrls.directive("myDialogOk", function () {
    return{
        restrict:"E",
        scope:{//����������
            title:'@',//���ַ���
            content:'@'
        },
        templateUrl:"./template/dialogok.html",
        controller:"DialogOkController"
    };
});
/**
 * Progressָ��
 * */
ctrls.directive("myProgress", function () {
    return{
        restrict:"E",
        templateUrl:"./template/progress.html",
        controller:"ProgressController"
    };
});
/**
 * Toastָ��
 * */
ctrls.directive("myToast", function () {
    return{
        restrict:"E",
        templateUrl:"./template/toast.html",
        controller:"ToastController"
    };
});
/**
 * LoadingToastָ��
 * */
ctrls.directive("myLoadingToast", function () {
    return{
        restrict:"E",
        templateUrl:"./template/loadingtoast.html",
        controller:"LoadingToastController"
    };
});
