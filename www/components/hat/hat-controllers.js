angular.module('ideaHat')
.controller('HatsCtrl', function($scope, $firebaseObject, $firebaseArray){
	var fa = new Firebase("https://ideahat.firebaseio.com");
	var ideasArray = $firebaseArray(fa.child('ideas'));
	ideasArray.$loaded().then(function(){
		$scope.ideas = ideasArray;
		console.log('ideas loaded:', $scope.ideas);
	})
	$scope.addHat = function(){
		if($scope.ideas && $scope.projectData.hasOwnProperty('name')){
			$scope.ideas.$add($scope.projectData);
		}
	};
})
.controller('HatDetailCtrl', function($scope){

})