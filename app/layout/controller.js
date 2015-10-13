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
	
	$scope.visitors = 0;
	$http.get('api/api.php/visitors?test=testing123')
	.then(function(resVisitors) {
		$scope.visitors = resVisitors.data[0];
	});
	
	// Update visitor count
	$scope.count = 1;
	$http.put('api/api.php/visitors?test=testing123', $scope.count)
	.success(function(status) {
		console.log(status);
	})
	.error(function(data, status, header, config) {
		console.log(data, status, header, config);
	});
});

// Todo: siirrä http serviceen