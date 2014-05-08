'use strict';

app.factory("allProfilesSrvc", function ($q, $http) {
  var deferred = $q.defer();
    var url = BASE_URL+"/api/sections/commercial/allprofiles";
    $http.get(url).success(function(data){
                    deferred.resolve(data);
                });
                return deferred.promise;
});

app.factory("firstProfileSrvc", function ($q, $http) {
	var response = {};
    $http.get(BASE_URL+"/api/sections/commercial/HE100AA?fy=235").success(function(data){
        response.val = data;
    });
    return response;
});

app.service("profileSrvc", function ($q, $http) {
  return {
    getProfile: function(p, s){
          var response = {};
          $http.get(BASE_URL+"/api/sections/commercial/"+p+"?fy="+s).success(function(data){
            response.val = data;
          });
          return response;
        },
    getCurve: function(p, s) {
        var response = {};
        $http.get(BASE_URL+"/api/sections/commercial/"+p+"/interactioncurves/ybending?fy="+s).success(function(data){
            response.val = data;
        });
        return response;
    }
  }
});

app.service("builtupSrvc", function ($q, $http) {
	return {
		getProfile: function(b, d , tw, tf, s){
          var response = {};
          $http.get(BASE_URL+"/api/sections/builtup/I2sym?fy="+s+"&b="+b+"&d="+d+"&tf="+tf+"&tw="+tw).success(function(data){
            response.val = data;
          });
          return response;
        },
        getCurve: function(b, d , tw, tf, s) {
            var response = {};
            $http.get(BASE_URL+"/api/sections/builtup/I2sym/interactioncurves/ybending?fy="+s+"&b="+b+"&d="+d+"&tf="+tf+"&tw="+tw).success(function(data){
                response.val = data;
            });
            return response;
        }
	}
});
