var sawyou;
(function (sawyou) {
    var common;
    (function (common) {
        var services;
        (function (services) {
            var FoursqareService = (function () {
                function FoursqareService($http) {
                    this.CLIENT_ID = "HRCBMBWAUSONEWYZVTCMZI0UXI1NVFFK1L4PL02WVHU5A24R";
                    this.CLIENT_SECRET = "OSTU0RVLRD42DHPAE4KLK1G43I4CBR3EQUYOMFEFK4IKP2JP";
                    this.httpService = null;
                    this.httpService = $http;
                    var self = this;
                    navigator.geolocation.getCurrentPosition(function (response) {
                        self.baseUrl = "https://api.foursquare.com/v2/venues/search?client_id=" + self.CLIENT_ID + "&client_secret=" + self.CLIENT_SECRET + "&v=20130815&ll=" + response.coords.latitude + "," + response.coords.longitude + "&query=";
                    });
                }
                FoursqareService.prototype.getFoursquarePlaces = function (searchTerm) {
                    return this.httpService.get(this.baseUrl + searchTerm);
                };
                FoursqareService.prototype.getList = function () {
                    return this.httpService.get("http://localhost/SawYouServices/api/SawYouEntries");
                };
                FoursqareService.prototype.addModel = function (model) {
                    //return this.httpService.post("/api/SawYouEntries", model);
                    return this.httpService.post("http://localhost/SawYouServices/api/SawYouEntries", model);
                };
                FoursqareService.$inject = ["$http"];
                return FoursqareService;
            })();
            services.FoursqareService = FoursqareService;
            sawyou.services.service("FoursqareService", FoursqareService);
        })(services = common.services || (common.services = {}));
    })(common = sawyou.common || (sawyou.common = {}));
})(sawyou || (sawyou = {}));
//# sourceMappingURL=FoursquareService.js.map