import { Component, OnInit } from '@angular/core';
import { IonicModule, LoadingController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})

export class Tab1Page implements OnInit {

  map: any;
  constructor(
    private loadingCtrl: LoadingController,
    
  ) {}

  ngOnInit() {
    //this.loadMap();
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: new google.maps.LatLng(4.64292, -74.05860),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
}
