'use strict';

D3App
    .directive("bubbleChartDirective", ['$rootScope', '$state','$compile', function($rootScope, $state, $compile) {
        return {
            restrict: 'A',
            scope: {
                data: '=data'
            },
            templateUrl: '/views/templates/bubbleChart.html',
            link: function (scope, element, attrs) {

            }
        }
    }]);