module sawyou.common.services {
    export class FoursqareService {
        static $inject = ["$http"];
        private CLIENT_ID: string = "HRCBMBWAUSONEWYZVTCMZI0UXI1NVFFK1L4PL02WVHU5A24R";
        private CLIENT_SECRET: string = "OSTU0RVLRD42DHPAE4KLK1G43I4CBR3EQUYOMFEFK4IKP2JP";
        private httpService: ng.IHttpService = null;
        private baseUrl: string;
       
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
            var self = this;
            
            navigator.geolocation.getCurrentPosition(function (response) {
                self.baseUrl = "https://api.foursquare.com/v2/venues/search?client_id=" + self.CLIENT_ID + "&client_secret=" + self.CLIENT_SECRET + "&v=20130815&ll=" + response.coords.latitude + "," + response.coords.longitude + "&query=";
            })
        }

        public getFoursquarePlaces(searchTerm: string): ng.IPromise<ng.IHttpPromiseCallbackArg<sawyou.server.IFoursquareGetPlacesResponse>> {

            
            return this.httpService.get(this.baseUrl + searchTerm);
        }

        public getList(): ng.IPromise<ng.IHttpPromiseCallbackArg<sawyou.server.ISawYouModel>> {

            return this.httpService.get("http://localhost/SawYouServices/api/SawYouEntries");
        }

        public addModel(model: sawyou.server.ISawYouModel): any {

            //return this.httpService.post("/api/SawYouEntries", model);
            return this.httpService.post("http://localhost/SawYouServices/api/SawYouEntries", model);
            
        }

    }

    export interface IFoursquareService {
        getFoursquarePlaces(searchTerm: string): ng.IPromise<ng.IHttpPromiseCallbackArg<sawyou.server.IFoursquareGetPlacesResponse>>;
        getList(): ng.IPromise<ng.IHttpPromiseCallbackArg<sawyou.server.ISawYouModel>>;
        addModel(model: sawyou.server.ISawYouModel): any;
    }

    sawyou.services.service("FoursqareService", FoursqareService);
}