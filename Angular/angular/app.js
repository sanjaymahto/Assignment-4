var myApp = angular.module('myGameApp', ['ngRoute']);

//Beginning of Team View Module for season 2015-16
myApp.controller('mainControllerTeamView2015', ['$http', '$scope', function ($http, $scope) {

    //create a context
    var main = this;

    this.matches2015 = [];

    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

    this.loadAllMatches = function () {

        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response);
                main.matches2015 = response.data;
                /*  for (var i = 0; i < main.matches2015.rounds.length; i++) {
                      var roundname = main.matches2015.rounds[i].name;
                      for (var j = 0; j < main.matches2015.rounds[i].matches.length; j++) {

                          // console.log(main.matches2015.rounds[i].matches[j]);

                      }
                  }*/
            },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
                console.log(response);

            });


    } // end load all matches

    this.loadAllMatches();
    $scope.text = '';


    $scope.submit = function () {
        console.log($scope.text);
        if ($scope.text) {
            $scope.count = 0;
            $scope.error = "";
            $scope.codename = "";
            $scope.matchwon = '';
            $scope.matchlost = '';
            $scope.matchdraw = '';
            //Write the code to retrieve the information for the user in order to show the result in the screen...
            for (var i = 0; i < main.matches2015.rounds.length; i++) {
                for (var j = 0; j < main.matches2015.rounds[i].matches.length; j++) {

                    // console.log(main.matches2015.rounds[i].matches[j]);
                    if (($scope.text.toUpperCase()) == (main.matches2015.rounds[i].matches[j].team1.name.toUpperCase())) {
                        // console.log("team 1");
                        $scope.error = "";
                        $scope.codename = (main.matches2015.rounds[i].matches[j].team1.code);
                        ++($scope.count);
                        if ((main.matches2015.rounds[i].matches[j].score1) > (main.matches2015.rounds[i].matches[j].score2)) {
                            ++($scope.matchwon);
                        } else {
                            if ((main.matches2015.rounds[i].matches[j].score1) == (main.matches2015.rounds[i].matches[j].score2)) {
                                ++($scope.matchdraw);
                            } else {
                                ++($scope.matchlost);
                            }

                        }
                        break;

                    } else {
                        if (($scope.text.toUpperCase()) == (main.matches2015.rounds[i].matches[j].team2.name.toUpperCase())) {
                            // console.log("team 2");
                            $scope.error = "";
                            ++($scope.count);
                            $scope.codename = (main.matches2015.rounds[i].matches[j].team2.code);
                            if ((main.matches2015.rounds[i].matches[j].score1) < (main.matches2015.rounds[i].matches[j].score2)) {
                                ++($scope.matchwon);
                            } else {
                                if ((main.matches2015.rounds[i].matches[j].score1) == (main.matches2015.rounds[i].matches[j].score2)) {
                                    ++($scope.matchdraw);
                                } else {
                                    ++($scope.matchlost);
                                }

                            }
                            break;
                        }

                    }
                }
            }
            if ($scope.matchwon == 0) {
                $scope.matchwon = "No match won by this Team.";
            }
            if ($scope.count == 0) {
                $scope.error = "Sorry! Either the Team hasn't played in this Season or Wrong team name entered...";
                console.log("Sorry Team not Present!");

            }
            console.log("Total Matches Played: " + $scope.count);
            //$scope.matchlost = ($scope.count - ($scope.matchwon + $scope.matchdraw));

        }
    }

 }]); // end controller*/
//End of team view module for season 2015-16


//Begining of team view module for season 2016-17
myApp.controller('mainControllerTeamView2016', ['$http', '$scope', function ($http, $scope) {

    //create a context
    var main = this;

    this.matches2016 = [];

    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';

    this.loadAllMatches = function () {

        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response);
                main.matches2016 = response.data;
                /*  for (var i = 0; i < main.matches2015.rounds.length; i++) {
                      var roundname = main.matches2015.rounds[i].name;
                      for (var j = 0; j < main.matches2015.rounds[i].matches.length; j++) {

                          // console.log(main.matches2015.rounds[i].matches[j]);

                      }
                  }*/
            },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
                console.log(response);

            });


    } // end load all matches

    this.loadAllMatches();
    $scope.text = '';
    $scope.error = "";
    $scope.codename = "";

    $scope.submit = function () {
        console.log($scope.text);
        if ($scope.text) {
            $scope.count = 0;
            $scope.error = "";
            $scope.codename = "";
            $scope.matchwon = '';
            $scope.matchlost = '';
            $scope.matchdraw = '';
            //Write the code to retrieve the information for the user in order to show the result in the screen...
            for (var i = 0; i < main.matches2016.rounds.length; i++) {
                for (var j = 0; j < main.matches2016.rounds[i].matches.length; j++) {

                    // console.log(main.matches2015.rounds[i].matches[j]);
                    if (($scope.text.toUpperCase()) == (main.matches2016.rounds[i].matches[j].team1.name.toUpperCase())) {
                        // console.log("team 1");
                        $scope.error = "";
                        $scope.codename = (main.matches2016.rounds[i].matches[j].team1.code);
                        ++($scope.count);
                        if ((main.matches2016.rounds[i].matches[j].score1) > (main.matches2016.rounds[i].matches[j].score2)) {
                            ++($scope.matchwon);
                        } else {
                            if ((main.matches2016.rounds[i].matches[j].score1) == (main.matches2016.rounds[i].matches[j].score2)) {
                                ++($scope.matchdraw);
                            } else {
                                ++($scope.matchlost);
                            }
                        }
                        break;

                    } else {
                        if (($scope.text.toUpperCase()) == (main.matches2016.rounds[i].matches[j].team2.name.toUpperCase())) {
                            //console.log("team 2");
                            $scope.error = "";
                            ++($scope.count);
                            $scope.codename = (main.matches2016.rounds[i].matches[j].team2.code);
                            if ((main.matches2016.rounds[i].matches[j].score1) < (main.matches2016.rounds[i].matches[j].score2)) {
                                ++($scope.matchwon);
                            } else {
                                if ((main.matches2016.rounds[i].matches[j].score1) == (main.matches2016.rounds[i].matches[j].score2)) {
                                    ++($scope.matchdraw);
                                } else {
                                    ++($scope.matchlost);
                                }
                            }
                            break;
                        }
                    }
                }
            }
            if ($scope.matchwon == 0) {
                $scope.matchwon = "No match won by this Team.";
            }
            if ($scope.count == 0) {
                $scope.error = "Sorry! Either the Team hasn't played in this Season or Wrong team name entered...";
                console.log("Sorry Team not Present!");

            }
            console.log("Total Matches Played: " + $scope.count);
            //$scope.matchlost = ($scope.count - ($scope.matchwon + $scope.matchdraw));

        }
    }

 }]); // end controller*/
//End of team view module for season 2016-17


//Module for single team view and all team view for 2015-16
myApp.controller('mainController2015', ['$http', function ($http) {

    //create a context
    var main = this;

    this.matches2015 = [];
    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';



    this.loadAllMatches = function () {

        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            main.matches2015 = response.data;
            for (var i = 0; i < main.matches2015.rounds.length; i++) {
                var roundname = main.matches2015.rounds[i].name;
                for (var j = 0; j < main.matches2015.rounds[i].matches.length; j++) {

                    console.log(main.matches2015.rounds[i].matches[j].date);

                }
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });


    } // end load all matches

    this.loadAllMatches();




}]); // end controller


//Module for single team view and all team view for 2016-17
myApp.controller('mainController2016', ['$http', function ($http) {

    //create a context
    var main = this;

    this.matches2016 = [];
    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';



    this.loadAllMatches = function () {

        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            main.matches2016 = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });


    } // end load all matches

    this.loadAllMatches();

}]); // end controller
