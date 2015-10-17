angular.module('vortechApp').controller('biographyCtrl', function($scope, $http) {
	$scope.members = [];
	$http.get('api/api.php/members', { params: {test: "testing123"} })
	.then(function(resBio) {
		$scope.members = resBio.data;
	});
});