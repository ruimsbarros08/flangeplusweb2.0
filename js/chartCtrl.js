'use strict';

app.controller("chartCtrl", function ($scope, $rootScope, firstCurveSrvc) {

    $rootScope.curves = firstCurveSrvc;

    $rootScope.updateChart = function() {
        return {
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
                categories: $rootScope.curves.val.axial_force.values,
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
                data: $rootScope.curves.val.plastic_moment.values
            }, {
                name: 'Elastic',
                data: $rootScope.curves.val.elastic_moment.values
            }]
        };
    };

    //$rootScope.highchartsNgConfig = $rootScope.updateChart();

});