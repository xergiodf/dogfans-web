/**
 * @author v.lugovsky
 * created on 16.12.2015
 * modified on 14.10.2017 by @xergio
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
        'ui.router',

        'BlurAdmin.pages.home',
        'BlurAdmin.pages.favorite'
    ])
        .config(InterceptorConfig)
        .config(Others)
        .run(AppRun)
        .config(routeConfig)
        .constant('API_DOGFANS', 'http://192.81.130.21:8080/dogfans/api');

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

    /*@ngInject*/
    function AppRun($rootScope) {
        $rootScope.$settings = {
            'showLoader': false
        };
    }

    /*@ngInject*/
    function InterceptorConfig($httpProvider) {

        $httpProvider.interceptors.push(['$q',
            function ($q) {
                return {
                    'request': function (config) {
                        angular.element('#loader').show();
                        return config;
                    },
                    'response': function(response) {
                        angular.element('#loader').hide();
                        return response || $q.when(response);
                    },
                    'responseError': function (error) {
                        angular.element('#loader').hide();
                        if (error.status === 401 || error.status === 403) {
                            console.log("Error " + error);
                        }
                        return $q.reject(response);
                    }
                };
            }]);
    }

    /*@ngInject*/
    function Others($httpProvider) {
        $httpProvider.defaults.headers.common = "Accept: application/json, text/plain, *﻿/﻿*";
    }

})();
