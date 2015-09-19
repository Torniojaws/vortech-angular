var vortechApp = angular.module('vortechApp', ['ngRoute']);

vortechApp.config(function($routeProvider) {
	$routeProvider
	
	.when('/:name*', {
		templateUrl: function(urlattr) {
			return 'views/' + urlattr.name + '.html';
		},
		controller: 'vortechMainApp'
	});
});

vortechApp.controller('vortechMainApp', function($scope, $http) {
	$scope.menulinks = []; // Init to prevent errors thrown
	$http.get('res/menulinks.json')
	.then(function(res) {
		$scope.menulinks = res.data;
	});
	
	$scope.externals = []; // Prevent errors thrown
	$http.get('res/externals.json')
	.then(function(res2) {
		$scope.externals = res2.data;
	});
	
	$scope.date = new Date();
});

vortechApp.controller('vortechReleasesApp', function($scope, $http) {
	$scope.albums = [];
	$http.get('contents/releases.json')
	.then(function(releases) {
		$scope.albums = releases.data;
		console.log($scope.albums);
	});
});

vortechApp.controller('vortechNewsApp', function($scope, $http) {
	$scope.news = [];
	$http.get('contents/news.json')
	.then(function(resNews) {
		$scope.news = resNews.data;
	});
});

vortechApp.controller('vortechLiveApp', function($scope, $http) {
	$scope.shows = [];
	$http.get('contents/liveshows.json')
	.then(function(resShows) {
		$scope.liveshows = resShows.data;
	});
});

vortechApp.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});