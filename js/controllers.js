/**
 * Created by GAMELoft9 on 2016/8/8.
 * 测试页面controllers
 */
angular.module("controllers", ["serviceFactory"])
.controller('homeCtrl', ["$scope",function($scope) {
    //初始化ngView的样式为不可见
    $scope.viewStyle = {
        left: '200%',
        height: 0,
        width: 0
    };

    $scope.showBlock = function() {
        //设置ngView的样式可见
        $scope.viewStyle = {
            left: 0,
            height: '100%',
            width: '100%'
        };
    };
}])
    .controller('actionsheetPageCtrl', ["$scope","operation",function($scope,operation) {
        //测试ActionSheet
        //begin
        $scope.showActionSheet = function(){//
            operation.showActionSheet();
        };
        $scope.addAction = function(action){//
            operation.addAction(action);
            operation.showActionSheet();
        };
        $scope.removeAction = function(actionName){//
            operation.removeAction(actionName);
        };
        $scope.doAction = function () {
            alert('Sample Ok !');
        };
        $scope.list = [{
            name:'示例菜单1',
            action:function(){
                alert('ok1');
            }},
            {
                name:'示例菜单2',
                action:function(){
                    alert('ok2');
                }}];
        //end
    }])
    .controller('dialogPageCtrl', ["$scope","operation",function($scope,operation) {
        //测试dialog
        //begin
        $scope.showDialogOk = function(){//
            operation.showDialogOk();
        };
        $scope.showDialogOkCancle = function(){//
            operation.showDialogOkCancle();
        };
        //end
    }])
    .controller('progressPageCtrl', ["$scope","operation",function($scope,operation) {
        //测试progress
        //begin
        $scope.setPosition = function(pos){//
            operation.setPosition(pos);
        };
        //end
    }])
    .controller('searchbarPageCtrl', ["$scope","operation",function($scope,operation) {
        //测试搜索
        //begin
        $scope.search = function(){
            //搜索并返回搜索结果
            var result=['搜索结果1','搜索结果2','搜索结果3'];
            return result;
        };
        //end
    }])
    .controller('toastPageCtrl',["operation",function($scope,operation) {
        //测试toast
        //end
        $scope.showToast = function(){//
            operation.showToast();
        };
        $scope.showLoadingToast = function(){//
            operation.showLoadingToast();
        };
        $scope.hideLoadingToast = function(){//
            operation.hideLoadingToast();
        };
        //end
    }]);