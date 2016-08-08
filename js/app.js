angular.module("app", [
        "ngRoute",
        "ngAnimate",
        "controllers",
        "serviceFactory",
        "directiveControllers"
    ]).config(["$routeProvider", function($routeProvider) {
    //路由配置
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: './views/home.html'
        })
        .when('/button', {
            templateUrl: './views/button.html'
        })
        .when('/cell', {
            templateUrl: 'views/cell.html'
        })
        .when('/toast', {
            controller: 'toastPageCtrl',
            templateUrl: 'views/toast.html'
        })
        .when('/dialog', {
            controller: 'dialogPageCtrl',
            templateUrl: 'views/dialog.html'
        })
        .when('/progress', {
            controller: 'progressPageCtrl',
            templateUrl: 'views/progress.html'
        })
        .when('/msg', {
            templateUrl: 'views/msg.html'
        })
        .when('/article', {
            templateUrl: 'views/article.html'
        })
        .when('/actionsheet', {
            controller: 'actionsheetPageCtrl',
            templateUrl: 'views/actionsheet.html'
        })
        .when('/icons', {
            templateUrl: 'views/icons.html'
        })
        .when('/panel', {
            templateUrl: 'views/panel.html'
        })
        .when('/tab', {
            templateUrl: 'views/tab.html'
        })
        .when('/navbar', {
            templateUrl: 'views/navbar.html'
        })
        .when('/tabbar', {
            templateUrl: 'views/tabbar.html'
        })
        .when('/searchbar', {
            controller: 'searchbarPageCtrl',
            templateUrl: 'views/searchbar.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
