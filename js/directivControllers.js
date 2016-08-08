/**
 * Created by GAMELoft9 on 2016/8/3.
 * @author GAMELoft9
 * 用AngularJS替代zepto.js实现weiui。
 * 创建Angular指令封装weiui部分控件，包括ActionSheet、Dialog、Progress、SearchBar、Toast。
 * 其余控件为纯HTML+CSS，不需要用AngularJS覆写。
 * 此部分为控件指令用到的控制器。
 */
var ctrls = angular.module("directiveControllers", ["serviceFactory"]);
ctrls.controller("SearchBarController", ["$scope", function($scope) {
        $scope.focusing = ''; //获得焦点时增加样式weui_search_focusing
        $scope.isSearchShow = false; //是否显示搜索框的下拉列表
        $scope.searchInput = ''; //搜索内容清空
        $scope.searchText = true; //是否显示默认状态下的搜索条样式
        $scope.result='';//搜索结果
        //调用外部搜索函数
        $scope.startSearch = function() {
            $scope.result= $scope.searchHandler();
        }

        $scope.searchClickEvent = function() {
            $scope.searchText = false;
            document.getElementById('searchInput').focus();
        }

        $scope.searchFocusEvent = function() {
            $scope.focusing = 'weui_search_focusing';
        }

        $scope.searchBlurEvent = function() {
            $scope.searchText = true;
            $scope.isSearchShow = false;
            $scope.focusing = '';
            $scope.searchInput = '';
        }

        $scope.searchKeyupEvent = function() {
            if ($scope.searchInput) {
                $scope.startSearch();
                $scope.isSearchShow = true;
            } else {
                $scope.isSearchShow = false;
            }
        }
    }])
    .controller("ActionSheetController", ["$scope","operation", function($scope,operation) {
        $scope.isShowActionsheet = false; //是否显示actionsheet
        $scope.actionsheetToggle = ''; //weui_actionsheet_toggle样式，显示时增加，不显示时去掉

        $scope.showActionSheet = function() {
            $scope.isShowActionsheet = true;
            $scope.actionsheetToggle = 'weui_actionsheet_toggle';
        };

        $scope.actionsheetCancel = function() {
            $scope.isShowActionsheet = false;
            $scope.actionsheetToggle = '';
        };

        $scope.addAction = function (action) {
            if($scope.actionList === undefined){//检查是否定给出了list
                $scope.actionList = [];
            }
            if($scope.actionList.constructor != Array){//检查actionList属性是否为数组
                //错误处理
                return;
            }
            //action必须有名字和调用函数，而且名字必须为字符串，调用函数必须是函数类型
            if(action.name&&action.action&&typeof action.name==="string"&&typeof action.action==="function"){
                $scope.actionList.push(action);
            }
            else{
                //错误处理
                return;
            }
        };
        $scope.removeAction = function (actionName) {//根据名字删除action
            if($scope.actionList){
                var length = $scope.actionList.length;
                if(length>0){
                    for(var i=0;i<length;i++){
                        if(actionName === $scope.actionList[i].name){
                            $scope.actionList.splice(i,1);
                        }
                    }
                }
            }
        }
        //暴露方法给外部
        operation.showActionSheet =  $scope.showActionSheet;
        //cancle是内部调用的不需要暴露
        // operation.actionsheetCancel =  $scope.actionsheetCancel;
        operation.addAction =  $scope.addAction;
        operation.removeAction = $scope.removeAction;
    }])
    .controller("DialogOkController", ["$scope","operation", function($scope,operation) {
        $scope.isShowDialogOk = false; //是否显示对话框1

        $scope.showDialogOk = function() {
            $scope.isShowDialogOk = true;
        }


        $scope.btnCancel = function() {
            $scope.isShowDialogOk = false;
        }

        $scope.btnOk = function() {
            $scope.isShowDialogOk = false;
        }
        //暴露操作给外部
        operation.showDialogOk =  $scope.showDialogOk;
    }])
    .controller("DialogOkCancleController", ["$scope","operation", function($scope,operation) {
        $scope.isShowDialogOkCancle = false; //是否显示对话框2

        $scope.showDialogOkCancle = function() {
            $scope.isShowDialogOkCancle = true;
        }

        $scope.btnCancel = function() {
            $scope.isShowDialogOkCancle = false;
        }

        $scope.btnOk = function() {
            $scope.isShowDialogOkCancle = false;
        }
        //暴露操作给外部
        operation.showDialogOkCancle =$scope.showDialogOkCancle;
    }])
    .controller("ProgressController", ["$scope","operation", function($scope,operation) {
        $scope.progressStyle = { width: "0%" }; //设置初始进度

        $scope.setPosition = function (position) {
            //判断position
            if(position >=0&&position<=100){
                var str =position.toString()+"%";
                $scope.progressStyle = { width: str }; //设置进度
            }
            else{
                //错误处理
            }
        }
        //暴露方法给外部
        operation.setPosition = $scope.setPosition;
    }])
    .controller("ToastController", ["$scope","$interval","operation", function($scope,$interval,operation) {
        $scope.toastHide = 0; //是否显示样式一

        $scope.showToast = function() {
            $scope.toastHide = 1;
            //显示3秒后消失
            $interval(function() {
                $scope.toastHide = 0;
            }, 3000, 1);
        }
        //暴露操作给外部
        operation.showToast =$scope.showToast;
    }])
    .controller("LoadingToastController", ["$scope","$interval","operation", function($scope,$interval,operation) {
        $scope.loadingToastHide = 0; //是否显示样式二

        $scope.showLoadingToast = function() {
            $scope.loadingToastHide = 1;
        };
        $scope.hideLoadingToast = function() {
            $scope.loadingToastHide = 0;
        };
        //暴露操作给外部
        operation.showLoadingToast =$scope.showLoadingToast;
        operation.hideLoadingToast =$scope.hideLoadingToast;
    }]);
