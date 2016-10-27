'use stricts';

angular.module('app.controllers', ['chart.js', 'nvd3', 'angularCharts']);
angular.module('app.services', []);
angular.module('app.filters', []);

angular.module('app', ['app.controllers', 'app.services', 'app.filters', 'ui.router', 'ngResource'])

.constant('appConfig', {
    baseUrl: 'http://localhost:3000'
})

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'build/views/home.html',
            controller: 'pierCtrl'
        });
}]);
