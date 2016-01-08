module sawyou.search {
    export var mainModule: ng.IModule = angular.module("sawyou.search", []);

    mainModule.config(function ($stateProvider, $urlRouterProvider) {
       
        // Set up the states
        $stateProvider
            .state('root.search', {
            url: "/search",
            templateUrl: "Templates/Features/Search/Search",
            controller: "SearchController as vm",
            resolve: {
                checkIns: ["FoursqareService", function (FoursqareService:sawyou.common.services.IFoursquareService) {
                    return FoursqareService.getList()
                        .then(function (response) {
                            return response.data
                        })
                }]
            }
        });

    });
}  