'use strict';

app.factory("firstProfileSrvc", function ($q, $http) {
	var response = {};
    $http.get(BASE_URL+"/api/sections/commercial/HE100AA").success(function(data){
        response.val = data;
    });
    return response;
});

app.service("profileSrvc", function ($q, $http) {
	return {
		getProfile: function(p){
          var response = {};
          $http.get(BASE_URL+"/api/sections/commercial/"+p).success(function(data){
            response.val = data;
          });
          return response;
        }
	}
});
