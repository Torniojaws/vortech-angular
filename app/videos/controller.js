angular.module('vortechApp').controller('videosCtrl', function($scope, $http) {
	// Youtube videos
	$http.get('api/api.php/videos/youtube', { params: {test: "testing123"} })
	.then(function(resYoutube) {
		$scope.youtube = resYoutube.data;
	});
	
	// Vimeo videos
	$http.get('api/api.php/videos/vimeo', { params: {test: "testing123"} })
	.then(function(resVimeo) {
		$scope.vimeo = resVimeo.data;
	});
});