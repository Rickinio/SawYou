var sawyou;
(function (sawyou) {
    var search;
    (function (search) {
        var SearchController = (function () {
            function SearchController(FoursqareService, checkIns, $timeout) {
                this.FoursqareService = FoursqareService;
                this.checkIns = checkIns;
                var self = this;
                var jQ = $;
                var connection = jQ.hubConnection("http://localhost/SawYouServices");
                var contosoChatHubProxy = connection.createHubProxy('SawYouHub');
                contosoChatHubProxy.on('newEntry', function (entry) {
                    $timeout(function () {
                        self.checkIns.push(entry);
                    });
                });
                connection.start().done(function () {
                });
            }
            SearchController.prototype.getAlert = function (searchTerm) {
                return this.FoursqareService.getFoursquarePlaces(searchTerm).then(function (response) {
                    return response.data.response.venues;
                });
            };
            SearchController.prototype.save = function () {
                var self = this;
                var model = {};
                model.FoursquareVenueName = this.selectedVenue.name;
                model.CheckInDescription = this.Description;
                model.FoursquareVenueId = this.selectedVenue.id;
                model.FoursquareVenueAddress = this.selectedVenue.location.formattedAddress[0];
                model.Id = 2;
                model.Email = "asd@asdad.gr";
                model.FoursquareVenueId = "123asd1";
                this.FoursqareService.addModel(model).then(function (response) {
                    self.FoursqareService.getList().then(function (response) {
                        self.checkIns = response.data;
                    });
                });
            };
            SearchController.$inject = ["FoursqareService", "checkIns", "$timeout"];
            return SearchController;
        })();
        search.SearchController = SearchController;
        sawyou.search.mainModule.controller("SearchController", SearchController);
    })(search = sawyou.search || (sawyou.search = {}));
})(sawyou || (sawyou = {}));
//# sourceMappingURL=Search.js.map