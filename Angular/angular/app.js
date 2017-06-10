// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('myGameApp', ['ngRoute']);


// this is without $scope
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
    $scope.error = "";
    $scope.codename = "";

    $scope.submit = function () {
        console.log($scope.text);
        if ($scope.text) {
            $scope.count = 0;
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
                        }
                       else{
                                 if ((main.matches2015.rounds[i].matches[j].score1) == (main.matches2015.rounds[i].matches[j].score2)) {
                                   ++($scope.matchdraw);
                               }
                                 
                                       else
                                {
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
                               }
                               else{
                                 if ((main.matches2015.rounds[i].matches[j].score1) == (main.matches2015.rounds[i].matches[j].score2)) {
                                   ++($scope.matchdraw);
                               }
                                 
                                       else
                                {
                                    ++($scope.matchlost);
                                }
                                
                        }
                            break;
                        }
                        
                    }
                }
            }
            if ($scope.matchwon == 0 && $scope.count != 0) {
                $scope.matchwon = "No match won by this Team.";
            }
            if ($scope.count == 0) {
                $scope.error = "Sorry! Either the Team hasn't played in this Season or Wrong team name entered...";
                $scope.codename="";
                console.log("Sorry Team not Present!");

            }
            console.log("Total Matches Played: " + $scope.count);
            //$scope.matchlost = ($scope.count - ($scope.matchwon + $scope.matchdraw));

        }
    }

 }]); // end controller*/


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
                        }
                       else{
                        if ((main.matches2016.rounds[i].matches[j].score1) == (main.matches2016.rounds[i].matches[j].score2)) {
                            ++($scope.matchdraw);
                        }
                     else
                            {
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
                               }
        
                             else{
                                 if ((main.matches2016.rounds[i].matches[j].score1) == (main.matches2016.rounds[i].matches[j].score2)) {
                                   ++($scope.matchdraw);
                               }
                                 
                                       else
                                {
                                    ++($scope.matchlost);
                                }
                                
                        }
                            break;
                        }
                    }
                }
            }
            if ($scope.matchwon == 0 && $scope.count != 0) {
                $scope.matchwon = "No match won by this Team.";
            }
            if ($scope.count == 0) {
                $scope.error = "Sorry! Either the Team hasn't played in this Season or Wrong team name entered...";
                $scope.codename="";
                console.log("Sorry Team not Present!");

            }
            console.log("Total Matches Played: " + $scope.count);
            //$scope.matchlost = ($scope.count - ($scope.matchwon + $scope.matchdraw));

        }
    }

 }]); // end controller*/




//End of the single team view...


// this is without $scope
myApp.controller('mainController2015', ['$http','$scope', function ($http,$scope) {

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
   $scope.myFunction = function(matchDate,name1,name2) {

        console.log("hello sanjay!!");
        console.log(matchDate);
        console.log(name1);
        console.log(name2);


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

                    if((main.matches2015.rounds[i].matches[j].date == matchDate) && (main.matches2015.rounds[i].matches[j].team1.name == name1 && main.matches2015.rounds[i].matches[j].team2.name == name2))
                    {
                    	
                    	var winningTeam = "";
                    	$scope.matchDay = roundname;
                    	$scope.date = matchDate;
                    	$scope.teamname1 = main.matches2015.rounds[i].matches[j].team1.name;
                    	$scope.teamname2 = main.matches2015.rounds[i].matches[j].team2.name;
                    	$scope.score1 = main.matches2015.rounds[i].matches[j].score1;
                    	$scope.score2 = main.matches2015.rounds[i].matches[j].score2;
                    	if(main.matches2015.rounds[i].matches[j].score1>main.matches2015.rounds[i].matches[j].score2)
                    	{
                    		 winningTeam = main.matches2015.rounds[i].matches[j].team1.name;
                    		 losingTeam = main.matches2015.rounds[i].matches[j].team2.name;
                    	}
                    	else
                    	{
                    		winningTeam = main.matches2015.rounds[i].matches[j].team2.name;
                    		losingTeam = main.matches2015.rounds[i].matches[j].team1.name;
                    	}
                    	$scope.win = winningTeam;
                    	$scope.lost = losingTeam;
                    	if(main.matches2015.rounds[i].matches[j].score1 == main.matches2015.rounds[i].matches[j].score2)
                    	{
                    		$scope.win ="";
                    	$scope.lost = "";
                    		$scope.draw = "match draw...";
                    	}
                    	else
                    	{
                    		$scope.draw = " ";
                    	}
                    	
                    }
                    else
                    {
                    	continue;
                    }
                   
                }
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });

    }




}]); // end controller


//main Controller for 2016 matches
myApp.controller('mainController2016', ['$http','$scope', function ($http,$scope) {

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

$scope.myFunction = function(matchDate,name1,name2) {

        console.log(matchDate);
        console.log(name1);
        console.log(name2);
        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            main.matches2016 = response.data;
            for (var i = 0; i < main.matches2016.rounds.length; i++) {
                var roundname = main.matches2016.rounds[i].name;
                for (var j = 0; j < main.matches2016.rounds[i].matches.length; j++) {

                    if((main.matches2016.rounds[i].matches[j].date == matchDate) && (main.matches2016.rounds[i].matches[j].team1.name == name1 && main.matches2016.rounds[i].matches[j].team2.name == name2))
                    {
                    	
                    	var winningTeam = "";
                    	$scope.matchDay = roundname;
                    	$scope.date = matchDate;
                    	$scope.teamname1 = main.matches2016.rounds[i].matches[j].team1.name;
                    	$scope.teamname2 = main.matches2016.rounds[i].matches[j].team2.name;
                    	$scope.score1 = main.matches2016.rounds[i].matches[j].score1;
                    	$scope.score2 = main.matches2016.rounds[i].matches[j].score2;
                    	if(main.matches2016.rounds[i].matches[j].score1>main.matches2016.rounds[i].matches[j].score2)
                    	{
                    		 winningTeam = main.matches2016.rounds[i].matches[j].team1.name;
                    		 losingTeam = main.matches2016.rounds[i].matches[j].team2.name;
                    	}
                    	else
                    	{
                    		winningTeam = main.matches2016.rounds[i].matches[j].team2.name;
                    		losingTeam = main.matches2016.rounds[i].matches[j].team1.name;
                    	}
                    	$scope.win = winningTeam;
                    	$scope.lost = losingTeam;
                    	if(main.matches2016.rounds[i].matches[j].score1 == main.matches2016.rounds[i].matches[j].score2)
                    	{
                    		$scope.win ="";
                    	$scope.lost = "";
                    		$scope.draw = "match draw...";
                    	}
                    	else
                    	{
                    		$scope.draw = " ";
                    	}
                    	
                    }
                    else
                    {
                    	continue;
                    }
                   
                }
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });

    }

  
}]); // end controller
