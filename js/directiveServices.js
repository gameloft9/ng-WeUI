/**
 * Created by GAMELoft9 on 2016/8/4.
 * @author GAMELoft9
 * 创建服务，将控件的操作暴露给外部使用。
 */
angular.module('serviceFactory',[])
    .factory('operation',function(){ //注册一个operation的service
    return {
        showToast:"",
        showLoadingToast:"",
        hideLoadingToast:"",
        showDialogOk:"",
        showDialogOkCancle:"",
        setPosition:"",
        showActionSheet:"",
        addAction:"",
        removeAction:""
    };
});