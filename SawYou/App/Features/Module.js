var sawyou;
(function (sawyou) {
    var search;
    (function (search) {
        search.mainModule = angular.module("sawyou.search", []);
        search.mainModule.config(function ($stateProvider, $urlRouterProvider) {
            // Set up the states
            $stateProvider.state('root.search', {
                url: "/search",
                templateUrl: "Templates/Features/Search/Search",
                controller: "SearchController as vm",
                resolve: {
                    checkIns: ["FoursqareService", function (FoursqareService) {
                        return FoursqareService.getList().then(function (response) {
                            return response.data;
                        });
                    }]
                }
            });
        });
    })(search = sawyou.search || (sawyou.search = {}));
})(sawyou || (sawyou = {}));
//# sourceMappingURL=Module.js.map