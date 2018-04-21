import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat: number = 37.424300;
  lng: number = -5.893100;
  zoom: number = 15;

  constructor() { 
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }
  

  addMarker( event ) {
    const coords: { lat: number, lng: number } = event.coords;
    
    const marker = new Marker(coords.lat, coords.lng);

    this.markers.push(marker);
    this.saveStorage();  
  }

  deleteMarker( i: number ) {
    console.log(i);
    
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
