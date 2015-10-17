angular.module('vortechApp').controller('liveCtrl', function($scope, $http) {
	$scope.shows = [];
	$http.get('api/api.php/shows', { params: {test: "testing123"} })
	.then(function(resShows) {
		$scope.liveshows = resShows.data;
	});
});