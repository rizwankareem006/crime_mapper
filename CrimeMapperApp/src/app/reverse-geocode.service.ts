import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodeService {

  constructor(private http: HttpClient) { }

  getLocations(latitude: number, longitude: number, resolve: any, reject?: any): void {
    const reverse_geocoding_url = 'http://127.0.0.1:8000/reverse_geocoding/';
    
    const locations_observable: Observable<ReverseGeocodingResponse> = 
      this.http.get<ReverseGeocodingResponse>(
      reverse_geocoding_url,
      {
        params: {
          latitude: latitude,
          longitude: longitude
        }
      }
    );

    locations_observable.subscribe((data: ReverseGeocodingResponse) => {
      resolve(data.locations);
    });
  }
}

export interface ReverseGeocodingResponse {
  locations: string[];
}