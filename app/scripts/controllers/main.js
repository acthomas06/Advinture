'use strict';

angular.module('advintureApp')
  .controller('MainCtrl', ['$scope', 'events', 'Eventservice', function ($scope, events, Eventservice) {
    $scope.events = events;
    $scope.eventFilter = {};
    $scope.feedlimit = 5;
    $scope.newEvent = {};
    $scope.addEvent = function() {
    	Eventservice.addEvent($scope.newEvent).then(function() {
    		$scope.events.push(angular.copy($scope.newEvent));

    		$scope.newEvent = {};
    	});
    };

    $scope.viewMore = function() {
        $scope.feedlimit = $scope.feedlimit + 5;
    };
  }]);
	