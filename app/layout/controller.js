angular.module('vortechApp').controller('layoutCtrl', function($scope, $http) {
	$scope.menulinks = []; // Init to prevent errors thrown
	$http.get('app/layout/menulinks.json')
	.then(function(res) {
		$scope.menulinks = res.data;
	});
	
	$scope.externals = []; // Prevent errors thrown
	$http.get('app/layout/externals.json')
	.then(function(res2) {
		$scope.externals = res2.data;
	});
	
	$scope.date = new Date();
});

// Todo: siirrä http serviceen