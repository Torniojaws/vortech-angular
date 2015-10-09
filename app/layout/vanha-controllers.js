var vortechApp = angular.module('vortechApp', ['ngRoute', 'ngDialog']);

vortechApp.config(function($routeProvider) {
	$routeProvider
	
	.when('/:name*', {
		templateUrl: function(urlattr) {
			return 'views/' + urlattr.name + '.html';
		},
		controller: 'vortechMainApp'
	});
});

// On siirretty, layoutController.js
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

// On siirretty, releasesContoller.js
// Will change to releases API from DB
vortechApp.controller('vortechReleasesApp', function($scope, $http) {
	$scope.albums = [];
	$http.get('contents/releases.json')
	.then(function(releases) {
		$scope.albums = releases.data;
		console.log($scope.albums);
	});
});

// On siirretty, newsContoller.js
// Will change to news API from DB
vortechApp.controller('vortechNewsApp', function($scope, $http) {
	$scope.news = [];
	$http.get('contents/news.json')
	.then(function(resNews) {
		$scope.news = resNews.data;
	});
});

// On siirretty, showsContoller.js
// Will change to shows API from DB
vortechApp.controller('vortechLiveApp', function($scope, $http) {
	$scope.shows = [];
	$http.get('contents/liveshows.json')
	.then(function(resShows) {
		$scope.liveshows = resShows.data;
	});
});

// Moved to reverseFilter.js
vortechApp.filter('reverse', function() {
	return function(items) {
		return items.slice().reverse();
	};
});

// On siirretty, photosContoller.js
// Will change to pictures API from DB
vortechApp.controller('vortechPhotoApp', function($scope, ngDialog) {
	$scope.showModal = function() {
		ngDialog.open({
			template: 'views/photosModal.html',
			className: 'ngdialog-theme-plain',
			showClose: true,
			scope: $scope
		});
	};
});

// For testing
vortechApp.controller('vortechDatabaseApp', function($scope, $http) {
	$scope.testDatabase = [];
	$http.get('api/')
	.then(function(resTest) {
		$scope.testdb = resTest.data;
	});
});