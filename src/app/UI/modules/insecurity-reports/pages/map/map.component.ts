import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;
  private _newMap!: GoogleMap;
  title= 'Safe City';

  ngAfterViewInit(){
    this.createMap();
  }

  private async createMap() {    
    const currentPosition: Position = await Geolocation.getCurrentPosition();
    this._newMap = await GoogleMap.create({
      id: 'insecurity-report-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsApikey,
      config: {
        center: {
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude,
        },
        zoom: 15
      },
    });
    this._newMap.addMarker({
      coordinate: {
        lat: currentPosition.coords.latitude,
        lng: currentPosition.coords.longitude
      }
    })
  }
}
