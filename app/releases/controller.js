// Will change to releases API from DB
angular.module('vortechApp').controller('vortechReleasesApp', function($scope, $http) {
	$scope.albums = [];
	$http.get('contents/releases.json')
	.then(function(releases) {
		$scope.albums = releases.data;
		console.log($scope.albums);
	});
});