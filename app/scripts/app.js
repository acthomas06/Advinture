'use strict';

angular.module('advintureApp', ['ui.router', 'ui.bootstrap'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('main', {
				url: '/home',
				views: {
					body: {
						templateUrl: 'views/main.html',
						controller: 'MainCtrl',
						resolve: {
							events: function(Eventservice) {
								return Eventservice.getEvents();
							}
						}
					}
				}
			})
			.state('post', {
				url: '/posts',
				views: {
					body: {
						templateUrl: 'views/posts.html',
						controller: 'PostCtrl',
						resolve: {
							event: function(Eventservice, $stateParams) {
								return Eventservice.getEvent($stateParams.id);
							}
						}
					}
				}
			})
		});

