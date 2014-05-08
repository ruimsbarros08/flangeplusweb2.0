'use strict';

app.controller("content", function ($scope, $rootScope, profileSrvc, firstProfileSrvc, builtupSrvc) {

	$scope.prof = firstProfileSrvc;
	$scope.typeOfSection = "commercial";

	$scope.curves = {val: {
						axial_strength: {
							values: [1 , 2, 3]
						},
						elastic_moment: {
							values: [34,24,31]
						},
						plastic_moment: {
							values: [12,23,13]
						}
					}
				};

	$rootScope.updateContent = function(profile, steel) {
		$rootScope.profile = profile;
		$scope.typeOfSection = "commercial";
		var s = steel.replace("S ", "");
		$scope.prof = profileSrvc.getProfile($rootScope.profile, s);
		$scope.curves = profileSrvc.getCurve($rootScope.profile, s);
		$scope.updateChart();
	};

	$rootScope.updateContentBuiltup = function(b, d, tw, tf, steel) {
		$scope.typeOfSection = "builtup";
		$rootScope.b = b;
		$rootScope.d = d;
		$rootScope.tw = tw;
		$rootScope.tf = tf;
		var s = steel.replace("S ", "");
		$scope.prof = builtupSrvc.getProfile(b, d, tw, tf, s);
		$scope.curves = builtupSrvc.getCurve($rootScope.profile, s);
		$scope.updateChart();
	};

	$rootScope.updateSteel = function(steel) {
		$rootScope.steel = steel;
		var s = steel.replace("S ", "");
		if ($scope.typeOfSection == "commercial"){
			$scope.prof = profileSrvc.getProfile($rootScope.profile, s);
			$scope.curves = profileSrvc.getCurve($rootScope.profile, s);
			$scope.updateChart();
		}
		else {
			$scope.prof = builtupSrvc.getProfile($rootScope.b, $rootScope.d, $rootScope.tw, $rootScope.tf, s);
			$scope.curves = builtupSrvc.getCurve($rootScope.profile, s);
			$scope.updateChart();
		}
	};

	$scope.updateChart = function() {
		$scope.highchartsNgConfig = {
			options: {
                chart: {
                type: 'area',
                inverted: true,
                zoomType: 'xy'
            	}
            },
            title: {
                text: 'N-My Interaction Curve'
            },
            subtitle: {
                style: {
                    position: 'absolute',
                    right: '0px',
                    bottom: '10px'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                title: {
                    text: 'Axial Force [kN]'
                },
                categories: $scope.curves.val.axial_strength.values,
                tickInterval: 100
            },
            yAxis: {
                title: {
                    text: 'Resistant Moment [kN.m]'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                },
                min: 0
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                },
                tooltip: {
                formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +'[kN] : '+ this.y+'[kN.m]';
                }
            },
                series: {
                        marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 0
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Plastic',
                data: $scope.curves.val.plastic_moment.values
            }, {
                name: 'Elastic',
                data: $scope.curves.val.elastic_moment.values
            }]
        };
	};
});