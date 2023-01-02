export interface LatLng {
    lat: string;
    lng: string;    
}

export interface InfoDay {
    day: string;
    date: string;
    info: string;
    waypoints: LatLng[];
}