(function () {
    'use strict';

    angular.module('BlurAdmin.pages')
        .controller('PageController', pageController);

    /** @ngInject */
    function pageController(BreedService, $scope) {
        var bSrvc = BreedService;

        var vm = this;

        vm.initialize = initialize;

        vm.data = {
            breedList: [],
            breedWrapper: [],
            selectedImg: ''
        };

        vm.fn = {
            fav: saveFavorite,
            unfav: removeFavorite
        };

        vm.initialize();

        $scope.$watch('vm.data.breedList', function (items) {
            angular.forEach(items, function (item, idx) {
                if (item.open) {
                    if (vm.data.breedWrapper.length === 0 ||
                        item.breed.name !== vm.data.breedWrapper[0].breed.name) {
                        vm.data.breedWrapper = [];
                        bSrvc.find(item.breed.name).then(function (data) {
                                vm.data.breedWrapper = data;
                            },
                            function (err) {
                                console.log(err);
                            });
                    }
                }
            });
        }, true);

        function initialize() {
            // Load breeds
            bSrvc.findAll().then(function (data) {
                    vm.data.breedList = data;
                },
                function (err) {
                    console.error(err);
                });
        }

        function saveFavorite(item) {
            bSrvc.saveFavorite(item.breed.name).then(function (data) {
                    item.favorite = true;
                },
                function (err) {
                    console.error(err);
                });
        }

        function removeFavorite(item) {
            bSrvc.removeFavorite(item.breed.name).then(function (data) {
                    item.favorite = false;
                },
                function (err) {
                    console.error(err);
                });
        }
    }
})();
