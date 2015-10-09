// Will change to pictures API from DB
angular.module('vortechApp').controller('photosCtrl', ['$scope', function($scope, ngDialog) {
	$scope.showModal = function() {
		ngDialog.open({
			template: 'photosModal.html',
			className: 'ngdialog-theme-plain',
			showClose: true,
			scope: $scope
		});
	};
}]);