'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
  		.state('main', {
            url: '',
  			views: {
	  			"dropdowns": {
	  				templateUrl: "tpl/dropdowns.html",
	                resolve: {
	                    allProfilesSrvc: "allProfilesSrvc"
	                },
	                controller: "selector"
	  			},
	  			"content": {
	  				templateUrl: "tpl/content.html",
	                resolve: {
	                    firstProfileSrvc: "firstProfileSrvc"
	                },
	                controller: "content"
	  			}
	  		}
	  	});
});