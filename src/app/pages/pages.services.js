(function () {

    "use strict";

    angular.module('BlurAdmin.pages')
        .service('BreedService', breedService);

    function breedService($http, $q, API_DOGFANS) {

        var API_BREED = API_DOGFANS + '/breeds';

        var service = {
            find: function (id) {
                function promise(resolve, reject) {

                    var url = API_BREED + "/" + id;

                    $http({
                        method: "GET",
                        url: url
                    }).then(successResponse, errorResponse);

                    function successResponse(response) {
                        resolve(response.data);
                    }
                    function errorResponse(response) {
                        reject(response.data);
                    }
                }

                return $q(promise);
            },
            findAll: function () {
                function promise(resolve, reject) {

                    var url = API_BREED;

                    $http({
                        method: "GET",
                        url: url
                    }).then(successResponse, errorResponse);

                    function successResponse(response) {
                        resolve(response.data);
                    }
                    function errorResponse(response) {
                        reject(response.data);
                    }
                }

                return $q(promise);
            },
            saveFavorite: function (id) {
                function promise(resolve, reject) {

                    var url = API_BREED + "/" + id + "/favorite";

                    $http({
                        method: 'POST',
                        url: url
                    }).then(successResponse, errorResponse);

                    function successResponse(response) {
                        resolve(response.data);
                    }
                    function errorResponse(response) {
                        reject(response.data);
                    }
                }

                return $q(promise);
            },
            removeFavorite: function (id) {
                function promise(resolve, reject) {

                    var url = API_BREED + "/" + id + "/favorite";

                    $http({
                        method: 'DELETE',
                        url: url
                    }).then(successResponse, errorResponse);

                    function successResponse(response) {
                        resolve(response.data);
                    }
                    function errorResponse(response) {
                        reject(response.data);
                    }
                }

                return $q(promise);
            }
        };

        return service;

    }
})();


