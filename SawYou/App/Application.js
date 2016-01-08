var sawyou;
(function (sawyou) {
    sawyou.services = angular.module("sawyou.services", []);
    sawyou.app = angular.module("sawyou", ["ui.router", "ui.bootstrap", "ui.bootstrap.tpls", "sawyou.services", "sawyou.search"]);
    sawyou.app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/search");
        //
        // Now set up the states
        $stateProvider.state('root', {
            url: "",
            abstract: true,
            template: "<div data-ui-view=''></div>"
        });
    });
})(sawyou || (sawyou = {}));
//# sourceMappingURL=Application.js.map