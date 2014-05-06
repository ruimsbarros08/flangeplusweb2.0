'use strict';

app.controller("content", function ($scope, $rootScope, profileSrvc, firstProfileSrvc, builtupSrvc) {

	$scope.prof = firstProfileSrvc;
	$scope.typeOfSection = "commercial";

	$rootScope.updateContent = function(profile, steel) {
		$rootScope.profile = profile;
		$scope.typeOfSection = "commercial";
		var s = steel.replace("S ", "");
		$scope.prof = profileSrvc.getProfile($rootScope.profile, s);
	};

	$rootScope.updateContentBuiltup = function(b, d, tw, tf, steel) {
		$scope.typeOfSection = "builtup";
		$rootScope.b = b;
		$rootScope.d = d;
		$rootScope.tw = tw;
		$rootScope.tf = tf;
		var s = steel.replace("S ", "");
		$scope.prof = builtupSrvc.getProfile(b, d, tw, tf, s);
	};

	$rootScope.updateSteel = function(steel) {
		$rootScope.steel = steel;
		var s = steel.replace("S ", "");
		if ($scope.typeOfSection == "commercial"){
			$scope.prof = profileSrvc.getProfile($rootScope.profile, s);
		}
		else {
			$scope.prof = builtupSrvc.getProfile($rootScope.b, $rootScope.d, $rootScope.tw, $rootScope.tf, s);	
		}
	};

});