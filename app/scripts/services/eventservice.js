'use strict';

angular.module('advintureApp')
  .service('Eventservice', function Eventservice($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	getEvents: function() {
    		var deferred = $q.defer();

    		$http({
    		 	method: 'GET',
    			url: 'http://localhost:8080/posts'}).success(function (data, status, headers, config) {
                deferred.resolve(data);
    		});
            return deferred.promise;
    	},

        addEvent: function(data) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'http://localhost:8080/posts',
                data: {
                    title: data.title,
                    description: data.description,
                    location: data.location,
                    date: data.date
                    }
            }).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
            });
            console.log(data);
            return deferred.promise;
        }
    };
  });
