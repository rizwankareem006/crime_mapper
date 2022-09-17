import { Injectable } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { Subject } from 'rxjs';
import { ReverseGeocodeService } from './reverse-geocode.service';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  
  private loader: Loader;
  private map: google.maps.Map | undefined;
  private marker: google.maps.Marker | undefined;
  locationSubject: Subject<string[]> = new Subject<string[]>();

  constructor(private reverseGeocodeService: ReverseGeocodeService) {
    this.loader = new Loader({
      apiKey: "AIzaSyBNRHmi6fBvtAFVTDmy2PCnwN1TAgX4178",
      version: "weekly",
    });
  }

  private addMarker(event: google.maps.MapMouseEvent): void {
    if (this.marker === undefined){
      this.marker = new google.maps.Marker({
        position: event.latLng,
        map: this.map
      });
    }
    else {
      this.marker.setPosition(event.latLng);
    }
  }

  private computeLocations(event: google.maps.MapMouseEvent): void {
    let computeLocs = new Promise((resolve, reject) => {
      const latitude: number = event.latLng?.lat() as number;
      const longitude: number = event.latLng?.lng() as number;
      this.reverseGeocodeService.getLocations(latitude, longitude, resolve, reject);
    });
    
    computeLocs.then((locations) => {
      this.locationSubject.next(locations as any);
    });
  }
  
  loadMap(elem: HTMLElement,
    center: {lat: number, lng:number} = { lat: 13.0827, lng: 80.2707 },
    zoom: number = 8): void {
    
    this.loader.load().then(() => {
      this.map = new google.maps.Map(elem, {
        center: center,
        zoom: zoom,
        zoomControl: true,
        rotateControl: false,
        scaleControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
      this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
        this.addMarker(event);
        this.computeLocations(event);
      });
    });
  }
}
