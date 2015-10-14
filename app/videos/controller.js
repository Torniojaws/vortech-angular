angular.module('vortechApp').controller('videosCtrl', function($scope, $http) {
	// Youtube videos
	$http.get('api/api.php/videos/youtube?test=testing123')
	.then(function(resYoutube) {
		$scope.youtube = resYoutube.data;
	});
	
	// Vimeo videos
	$http.get('api/api.php/videos/vimeo?test=testing123')
	.then(function(resVimeo) {
		$scope.vimeo = resVimeo.data;
	});
});