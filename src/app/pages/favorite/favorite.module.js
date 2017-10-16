/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.favorite', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('favorite', {
                url: '/favorite',
                templateUrl: 'app/pages/favorite/favorite.html',
                title: 'Favorite',
                controller: 'PageController as vm',
                sidebarMeta: {
                    icon: 'ion-android-star',
                    order: 100,
                },
            });
    }

})();
