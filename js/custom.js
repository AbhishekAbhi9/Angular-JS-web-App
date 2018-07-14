(function(){
'use strict'

	var myApp = angular.module('myApp', []);
	myApp.controller('controller', function($scope,$log,$filter){
		$scope.new = "Abhishek";

		$scope.upper = function(){
			var Upper_new = $filter('uppercase');
            $scope.new = Upper_new($scope.new);
		}
	});

	myApp.controller('image_change', function($scope,$log){
        $scope.image = "1";
		$scope.change = function(){
			$scope.image = "2";
		}
		
	});

})();