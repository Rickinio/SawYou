module sawyou {
    export var services: ng.IModule = angular.module("sawyou.services", []);
    export var app: ng.IModule = angular.module("sawyou", ["ui.router", "ui.bootstrap","ui.bootstrap.tpls", "sawyou.services","sawyou.search"]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/search");
        //
        // Now set up the states
        $stateProvider
            .state('root', {
            url: "",
            abstract: true,
            template: "<div data-ui-view=''></div>"
        });

    });
} 