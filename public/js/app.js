var D3App = angular.module('D3App',['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: './views/home.html',
            controller: 'HomeController'
        })
        .state('home.calendar', {
            url:'/calendar',
            templateUrl: '/views/homeCalendar.html',
            controller: 'HomeCalendarController'
        })
        .state('home.changes', {
            url:'/changes',
            templateUrl: '/views/homeChanges.html',
            controller: 'HomeChangesController'
        })
        .state('home.milestone', {
            url:'/milestone',
            templateUrl: '/views/homeMileStone.html',
            controller: 'HomeMileStoneController'
        })
        .state('home.overtime', {
            url:'/overtime',
            templateUrl: '/views/homeOverTime.html',
            controller: 'HomeOverTimeController'
        })
}]);