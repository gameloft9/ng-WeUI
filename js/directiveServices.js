/**
 * Created by GAMELoft9 on 2016/8/4.
 * @author GAMELoft9
 * �������񣬽��ؼ��Ĳ�����¶���ⲿʹ�á�
 */
angular.module('serviceFactory',[])
    .factory('operation',function(){ //ע��һ��operation��service
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