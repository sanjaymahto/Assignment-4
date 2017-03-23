//var myApp = angular.module('myGameApp', ['ngRoute']); 

myApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
    .when('/',{
        template: '<h3 style="text-align:center;">: Click on the tabs on navigation bar to view match details :</h3>'
    })
        .when('/page-top', {
            template: ''
        })
        .when('/allMatches2015', {
            // location of the template

            templateUrl: 'views/index-view-2015.html',
            controller: 'mainController2015',
            controllerAs: 'myGame2015'

        })
        .when('/allMatches2016', {
            // location of the template

            templateUrl: 'views/index-view-2016.html',
            controller: 'mainController2016',
            controllerAs: 'myGame2016'

        })
        .when('/matches', {
            //load this template as default...
            templateUrl: 'views/index-view-2015.html',
            controller: 'mainController2015',
            controllerAs: 'myGame2015'
        })
        .when('/singleMatch', {
            templateUrl: 'views/Single-team-view.html',
            controller: 'mainController2015',
            controllerAs: 'myGame2015'
        })
        .when('/viewTeam', {
            templateUrl: 'views/Team-view.html',
            controller: 'mainControllerTeamView2015',
            controllerAs: 'myGameTeamView2015'
        })
     .when('/Matches2015', {
            templateUrl: 'views/Team-view.html',
            controller: 'mainControllerTeamView2015',
            controllerAs: 'myGameTeamView2015'
        })
     .when('/Matches2016', {
            templateUrl: 'views/Team-view-1.html',
            controller: 'mainControllerTeamView2016',
            controllerAs: 'myGameTeamView2016'
        })
        .otherwise({
            template: '<h2 style="color:white;text-align:center;">Error : 404 page not found</h2>'
        });
}]);
