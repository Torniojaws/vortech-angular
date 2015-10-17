angular.module('vortechApp').factory('BioService', ['$http', function($http) {
	function getActive(member) {
		if(member.active) {
			return; // TODO: How to implement this?
		}
	}
	return {
		getMembers: function() {
			return $http.get('api/api.php/members', { params: {test: "testing123"} }});
		}
		getActive: function() {
			return getMembers().then(getActive(members));
		}
	}
}]);