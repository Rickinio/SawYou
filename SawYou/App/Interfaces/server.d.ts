declare module sawyou.server {

    export interface IFoursquareResponse {
        venues: sawyou.server.IFoursquareVenues[];
    }

    export interface IFoursquareVenues {
        id: string;
        name: string;
        constact: sawyou.server.IFoursquareContact;
        location: sawyou.server.IFoursquareLocation;
        categories: sawyou.server.IFoursquareCategories;
        verified: boolean;
        stats: sawyou.server.IFoursquareStats;
        specials: sawyou.server.IFoursquareSpecials;
        hereNow: sawyou.server.IFoursquareHereNow;
        referralId: string;
    }

    export interface IFoursquareHereNow {
        count: number;
        summary: string;
        groups: any;
    }

    export interface IFoursquareSpecials {
        count: number;
        items: any;
    }

    export interface IFoursquareStats {
        checkinsCount: number;
        usersCount: number;
        tipCount: number;
    }

    export interface IFoursquareCategories {
        id: string;
        name: string;
        pluralName: string;
        shortName: string;
        icon: sawyou.server.IFoursquareIcon;
        primary: boolean;
    }
    export interface IFoursquareIcon {
        prefix: string;
        suffix: string;
    }

    export interface IFoursquareLocation {
        address: string;
        crossStreet: string;
        lat: number;
        lng: number;
        distance: number;
        postalCode: string;
        cc: string;
        city: string;
        state: string;
        country: string;
        formattedAddress: string[];
    }

    export interface IFoursquareContact {
        phone: string;
        formattedPhone: string;
    }

    export interface IFoursquareMeta {
        code: number;
    }

    export interface IFoursquareGetPlacesResponse {
        meta: sawyou.server.IFoursquareMeta;
        response: sawyou.server.IFoursquareResponse;
    }

    export interface ISawYouModel {
        Id: number;
        CheckInType: sawyou.server.CheckInType;
        FoursquareVenueId: string;
        FoursquareVenueName: string;
        FoursquareVenueAddress: string;
        Email: string;
        CheckInDescription: string;
    }

} 