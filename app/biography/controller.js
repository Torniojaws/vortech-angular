angular.module('vortechApp').controller('biographyCtrl', function($scope, $http, ngDialog) {
	$scope.members = [];
	$http.get('api/api.php/members', { params: {test: "testing123"} })
	.then(function(resBio) {
		$scope.members = resBio.data;
	});
	
	// Modal windows for member information
	$scope.showModal = function(param) {
		// Get specific member's info
		$scope.memberDetail = [];
		$http.get('api/api.php/members/' + param, { params: {test: "testing123"} })
		.then(function(resBioDetail) {
			$scope.memberDetail = resBioDetail.data;
			console.log("Taytetty member = ", $scope.memberDetail);
		});
		
		// And show it in the modal window via scope
		ngDialog.open({
			template: 'app/biography/bioModal.html',
			className: 'ngdialog-theme-plain',
			data: $scope.memberDetail,
			showClose: true,
			scope: $scope
		});
	};
});