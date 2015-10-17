angular.module('vortechApp').controller('photosCtrl', function($scope, $http, ngDialog) {
	$scope.photoalbums = [];
	$http.get('api/api.php/photoalbums', { params: {test: "testing123"} })
	.then(function(resAlbums) {
		$scope.photoalbums = resAlbums.data;
	});
	
	$scope.photos = [];
	$http.get('api/api.php/photos', { params: {test: "testing123"} })
	.then(function(resPhotos) {
		$scope.photos = resPhotos.data;
	});
	
	$scope.showModal = function() {
		ngDialog.open({
			template: 'app/photos/photosModal.html',
			className: 'ngdialog-theme-plain',
			showClose: true,
			scope: $scope
		});
	};
});