'use strict';

app.controller("selector", function ($scope, $rootScope, allProfilesSrvc) {
	$scope.allprofiles = allProfilesSrvc;

	$scope.type = "HE";
	$rootScope.profile = "HE100AA";
	$rootScope.steel = "S 235"

	$scope.selectedType = $scope.allprofiles.Profiles.HE;

	$scope.updateType = function(type) {
		if (type == "HE"){
			$rootScope.profile = "HE100AA";
			$scope.selectedType = $scope.allprofiles.Profiles.HE;
		}
		else if (type == "IPE"){
			$rootScope.profile = "IPEAA80";
			$scope.selectedType = $scope.allprofiles.Profiles.IPE;	
		}
		else if (type == "UC"){
			$rootScope.profile = "UC152x152x23";
			$scope.selectedType = $scope.allprofiles.Profiles.UC;	
		}
		else if (type == "UB"){
			$rootScope.profile = "UB127x76x13";
			$scope.selectedType = $scope.allprofiles.Profiles.UB;	
		}
		else if (type == "W"){
			$rootScope.profile = "W1100X499";
			$scope.selectedType = $scope.allprofiles.Profiles.W;	
		}
		$rootScope.updateContent($rootScope.profile, $rootScope.steel);
	};

});