 var myApp = angular.module('myApp', []);

        myApp.controller("myController", function ($scope, $interval) {
             $scope.timerWithInterval = 0;
   $scope.startTimerWithInterval = function() {
    $scope.timerWithInterval = 0;
    if($scope.myInterval){
      $interval.cancel($scope.myInterval);
    }
    $scope.onInterval = function(){
        $scope.timerWithInterval++;
    }
    $scope.myInterval = $interval($scope.onInterval,1000);
  };
            $scope.resetTimerWithInterval = function(){
    $scope.timerWithInterval = 0;
    $interval.cancel($scope.myInterval);
  }
     
        })
myApp.filter('hhmmss', function () {
  return function (time) {
    var sec_num = parseInt(time, 10); //string and return integer decimel
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
  }
});