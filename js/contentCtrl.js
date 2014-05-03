'use strict';

app.controller("content", function ($scope, $rootScope, profileSrvc, firstProfileSrvc) {

	$scope.prof = firstProfileSrvc;

	$rootScope.updateContent = function(profile) {
		$scope.prof = profileSrvc.getProfile(profile);
	};

});