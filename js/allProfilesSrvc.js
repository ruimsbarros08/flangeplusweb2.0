'use strict';

app.factory("allProfilesSrvc", function ($q, $http) {
	var deferred = $q.defer();
    var url = "http://localhost/api/sections/commercial/allprofiles";
    $http.get(url).success(function(data){
                    deferred.resolve(data);
                });
                return deferred.promise;
});