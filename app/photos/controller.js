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
	
	$scope.showModal = function(param_path, id) {
		console.log("Saatiin path:", param_path);
		
		// Get specific picture info
		$scope.photoDetail = [];
		$http.get('api/api.php/photos/' + id, { params: {test: "testing123"} })
		.then(function(resPhotoDetail) {
			$scope.photoDetail = resPhotoDetail.data;
			$scope.photoDetail.push(param_path);
			console.log("Saatiin det:", $scope.photoDetail);
		});
		ngDialog.open({
			template: 'app/photos/photosModal.html',
			className: 'ngdialog-theme-plain',
			data: $scope.photoDetail,
			showClose: true,
			scope: $scope
		});
	};
});