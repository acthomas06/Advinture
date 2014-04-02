'use strict';

angular.module('advintureApp')
  .controller('MainCtrl', ['$scope', 'events', 'Eventservice', function ($scope, events, Eventservice) {
    $scope.events = events;
    $scope.newEvent = {};
    $scope.eventFilter = {};
    $scope.feedlimit = 6;
    $scope.orderReverse = "false";
    $scope.orderAttribute = 'title';
    $scope.addEvent = function() {
    	Eventservice.addEvent($scope.newEvent).then(function() {
    		$scope.events.push(angular.copy($scope.newEvent));
            console.log($scope.newEvent);
            $scope.newEvent = {};
    	});
    };

    $scope.viewMore = function() {
        $scope.feedlimit = $scope.feedlimit + 6;
    };
  }]);
	