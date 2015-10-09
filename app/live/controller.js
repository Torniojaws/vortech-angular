// Will change to shows API from DB
angular.module('vortechApp').controller('vortechShowsApp', function($scope, $http) {
	$scope.shows = [];
	$http.get('contents/liveshows.json')
	.then(function(resShows) {
		$scope.liveshows = resShows.data;
	});
});