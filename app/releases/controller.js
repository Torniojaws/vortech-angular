angular.module('vortechApp').controller('releasesCtrl', function($scope, $http) {
	$scope.albums = [];
	$scope.tracklist = [];
	
	// Tracks for each album
	$http.get('api/api.php/tracks', { params: {test: "testing123"} })
	.then(function(tracks) {
		$scope.tracklist = tracks.data;
	});
	
	// Album data
	$http.get('api/api.php/releases', { params: {test: "testing123"} })
	.then(function(releases) {
		$scope.albums = releases.data;
	});
	
	$scope.current_year = moment().year();
});

angular.module('vortechApp').controller('releasesDetailCtrl', function($scope, $http, $routeParams) {
	console.log($routeParams.id);
});