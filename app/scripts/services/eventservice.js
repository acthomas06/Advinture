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

        getEvent: function(id) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url:  'http://localhost:8080/posts/' + id}).success(function (data, status, headers, config) {
                if(Array.isArray(data)) {
                    deferred.resolve(data[0]);
                }
                else {
                    deferred.resolve(data);
                }
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
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
                    description: data.desc,
                    location: data.loc,
                    date: data.date
                    }
            }).success(function (data, status, headers, config) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
            });
            console.log(event);
            return deferred.promise;
        }
    };
  });
