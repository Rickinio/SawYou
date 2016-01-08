module sawyou.search {

    export class SearchController {
        static $inject = ["FoursqareService", "checkIns","$timeout"];

        public Description: string;
        public selectedVenue: sawyou.server.IFoursquareVenues;


        constructor(public FoursqareService: sawyou.common.services.IFoursquareService, public checkIns: sawyou.server.ISawYouModel[], $timeout:ng.ITimeoutService) {
            var self = this;
            var jQ:any = $;
            var connection = jQ.hubConnection("http://localhost/SawYouServices");
            var contosoChatHubProxy = connection.createHubProxy('SawYouHub');
            contosoChatHubProxy.on('newEntry', function (entry) {
                $timeout(function () {
                    self.checkIns.push(entry);
                })
            });
            connection.start().done(function () { });

        }

        public getAlert(searchTerm) {
           return this.FoursqareService.getFoursquarePlaces(searchTerm)
                .then(function (response) {
                   return response.data.response.venues;
            });
        }

        public save() {
            var self = this;
            var model = <sawyou.server.ISawYouModel>{};
            model.FoursquareVenueName = this.selectedVenue.name;
            model.CheckInDescription = this.Description;
            model.FoursquareVenueId = this.selectedVenue.id;
            model.FoursquareVenueAddress = this.selectedVenue.location.formattedAddress[0];
            model.Id = 2;
            model.Email = "asd@asdad.gr";
            model.FoursquareVenueId = "123asd1";
            this.FoursqareService.addModel(model)
                .then(function (response) {
                self.FoursqareService.getList()
                    .then(function (response:any) {
                        self.checkIns = response.data;
                    })
                })
        }
    }

    sawyou.search.mainModule.controller("SearchController", SearchController)

} 