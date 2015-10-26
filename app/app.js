/* Note to self: Only add dependencies like ngRoute in here. Not in the controllers! It will break the app */
angular.module('vortechApp', ['ngRoute', 'ngDialog', 'angularMoment', 'angularSoundManager'])
.config(function($routeProvider) {
	$routeProvider
	.when('/news', {
		templateUrl: 'app/news/news-view.html',
		controller: 'newspageCtrl'
	})
	.when('/releases', {
		templateUrl: 'app/releases/releases-view.html',
		controller: 'releasesCtrl'
	})
	.when('/releases/:id', {
		templateUrl: 'app/releases/release-view.html',
		controller: 'releasesCtrl'
	})
	.when('/biography', {
		templateUrl: 'app/biography/biography-view.html',
		controller: 'biographyCtrl',
	})
	.when('/photos', {
		templateUrl: 'app/photos/photos-view.html',
		controller: 'photosCtrl'
	})
	.when('/videos', {
		templateUrl: 'app/videos/videos-view.html',
		controller: 'videosCtrl'
	})
	.when('/shop', {
		templateUrl: 'app/shop/shop-view.html',
		controller: 'shopCtrl'
	})
	.when('/guestbook', {
		templateUrl: 'app/guestbook/guestbook-view.html',
		controller: 'guestbookCtrl'
	})
	.when('/live', {
		templateUrl: 'app/live/live-view.html',
		controller: 'liveCtrl'
	})
	.otherwise({redirectTo: '/news'});
});